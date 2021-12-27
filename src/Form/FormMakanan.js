import React from "react";

class FormMakanan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pesanan: "",
            jumlah: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
        this.pesanan = React.createRef();
    }
    handleChange(value, e) {
        const eventTarget = e.target.value;
        this.setState((state, props) => {
            return {
                pesanan: eventTarget
            }
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert("Pesanan anda adalah :" + this.state.pesanan + "Jumlah Pesanan :" + this.state.jumlah);
        this.setState((state, props) => {
            return { pesanan: "", 
            jumlah: "" 
        }
        });
        this.pesanan.current.focus();
    }
    handleChangeJumlah(value, e) {
        const eventTarger = e.target.value;
        this.setState((state, props) => {
            return {
                jumlah: eventTarger
            }
        });
    }
    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={e => this.handleChange("pesanan", e)} value={this.state.pesanan} ref={this.pesanan} placeholder="Masukkan Makanan"></input>
                        <input type="number" onChange={e => this.handleChangeJumlah("jumlah", e)} ref={this.pesanan} placeholder="Masukkan Jumlah Makanan"></input>
                        <br></br>
                        <input type="submit" value="pesan"></input>
                    </form>
                </center>
            </div>
        );
    }
}
export default FormMakanan;