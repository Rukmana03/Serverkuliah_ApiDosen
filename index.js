const mahasiswaNim = '110020307';
const updateData = {
    nama: 'Bobon',
    gender: 'L',
    prodi: 'TE',
    alamat: 'JL.Bolangsuar'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
