import styled from 'styled-components'

const media = {
    desktop: '@media(min-width: 900px)'
}

export const ContentWrap = styled.div`
    width: 100%;
    // border: 1px solid green;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
        width: 1000px
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
        color: gray;
        margin-left: 14px;
        align-self: flex-start;
    }

    .boxWrap {
        width: 90%;
        // border: 1px solid blue;

        ${media.desktop} {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
        }

        .formulario {
            widht: 100%;
            // height: 150px;
            border: solid gray;
            display: flex;
            flex-flow: col;
            align-items: center;

            input[type=text], select {
                width: 55%;
                padding: 4px 4px;
                // margin: 8px 8px;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
              }

              .btn_calc {
                width: 90%;
                background-color: #002B34;
                color: white;
                font-size: 15px;
                text-align: center;
                padding: 10px 10px;
                margin: 8px 8px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              }
              
              .btn_calc:hover {
                background-color: gray;
              }

            .area_construida {
                margin: 8px 8px;
            }

            table {
                margin-top: 15px;
                margin-left: auto;
                margin-right: auto;
            }

            th {
                padding: 3px 3px;
                text-align: center;
                background-color: #002B34;
                color: white;
              }

            td {
            text-align: center;
            }

            .titulo_fixo1 {
                font-weight: bold;
            }

            .titulo_fixo2 {
                background-color: #002B34;
                font-weight: bold;
                color: white;
            }

            .custo_estimado {
                background-color: #DDDDDD;
                font-weight: bold;
            }

            ${media.desktop} {
                width: 45%;
            }
        }
    }
`