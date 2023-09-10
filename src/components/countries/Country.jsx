
export default function Country(props) {
    // const { name} = props;
    // const { name, official, nativeName,  } = props;
    const countryName = props?.country?.name?.common;
    const countryOfficialName = props?.country?.name?.nativeName?.eng?.official;
    // console.log(countryName);
    console.log(props?.country?.name?.nativeName?.eng?.official);
    return (
        <>
            <div >
                Country Name: {countryName}
                <br />
                Official Name: {countryOfficialName ? countryOfficialName : countryName}
            </div>
        </>
    )
}
