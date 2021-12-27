import React from "react";
import ListMakanan from "../ListData/ListMakanan";
import DaftarMakanan from "../Lib/DaftarMakanan";
import FormMakanan from "../Form/FormMakanan";

const listmakanan=[
    {
        NamaMakanan : "Nasi Padang",
        Harga : "20.000"
    },
    {
        NamaMakanan : "Sate",
        Harga : "20.000"
    },
    {
        NamaMakanan : "Soto",
        Harga : "10.000"
    },
    {
        NamaMakanan : "Uduk",
        Harga : "10.000"
    },
    {
        NamaMakanan : "Nasi kuning",
        Harga : "15.000"
    },
    {
        NamaMakanan : "Ayam Geprek",
        Harga : "15.000"
    },
    {
        NamaMakanan : "Pecel Lele",
        Harga : "15.000"
    },
    {
        NamaMakanan : "Pecel",
        Harga : "10.000"
    },
    {
        NamaMakanan : "Mie Ayam",
        Harga : "10.000"
    },
]

class MenuMakanan extends React.Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data,index) => {
                                return(
                                    <td key={index}>
                                        <img src={data.img}
                                        alt="Product Makanan"
                                        width="150"
                                        height="100"></img>
                                        <center>
                                            <p>{data.NamaMakanan}</p>
                                            <p>{data.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
                <h4>List Makanan</h4>
                {listmakanan.map((value,index) => {
                    return(
                        <div key={value}>
                            <p>{value.NamaMakanan} | {value.Harga}</p>
                        </div>
                    );
                })}
                <FormMakanan />
            </div>
        );
    }
}
export default MenuMakanan;