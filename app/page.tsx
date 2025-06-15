"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon, Ship, FileText, Users, Clock } from 'lucide-react';

interface FormData {
  // Agency Section
  agence: string;
  numero: string;
  
  // Ship Details
  navire: string;
  pavilion: string;
  tonBrut: string;
  tonNet: string;
  teAvant: string;
  teArriere: string;
  
  // Pilot Request
  piloteDemande: string;
  date: string;
  trajet: string;
  section: string;
  dehalage: string;
  heureDebut: string;
  heureArrivee: string;
  secteur: string;
  journee: string;
  
  // Additional Info
  pob: string;
  np: string;
  dm: string;
  ahc: string;
  
  // Observations
  observations: string;
  
  // Personnel
  pilote1: string;
  pilote2: string;
  capitaine: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    agence: '',
    numero: '',
    navire: '',
    pavilion: '',
    tonBrut: '',
    tonNet: '',
    teAvant: '',
    teArriere: '',
    piloteDemande: '',
    date: '',
    trajet: '',
    section: '',
    dehalage: '',
    heureDebut: '',
    heureArrivee: '',
    secteur: '',
    journee: '',
    pob: '',
    np: '',
    dm: '',
    ahc: '',
    observations: '',
    pilote1: '',
    pilote2: '',
    capitaine: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically submit to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-8">
            {/* PREMIÈRE COLONNE - Plus large */}
            <div className="col-span-8 space-y-6">
              {/* Header avec Logo + Titre */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <img 
                      src="https://cvm-sa.com/wp-content/uploads/2023/11/cropped-cvm-removebg-preview-1.png" 
                      alt="CVM Logo" 
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h1 className="text-2xl font-bold text-blue-900 mb-1">RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</h1>
                    <p className="text-sm text-gray-700 font-medium">
                      CONGOLAISE DES VOIES MARITIMES<br />
                      DIRECTION D'EXPLOITATION<br />
                      Sous-Direction du Pilotage
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 inline-block">
                  BULLETIN DE PILOTAGE
                </h2>
              </div>

              {/* Deux sections en colonnes séparées par une ligne */}
              <div className="grid grid-cols-2 gap-8">
                {/* Section AGENCE */}
                <Card className="border-2 border-gray-300">
                  <CardHeader className="bg-blue-50 py-3">
                    <CardTitle className="text-lg font-bold text-blue-900">AGENCE</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">Nom de l'agence</Label>
                      <Input
                        value={formData.agence}
                        onChange={(e) => handleInputChange('agence', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="Nom de l'agence"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">N°</Label>
                      <Input
                        value={formData.numero}
                        onChange={(e) => handleInputChange('numero', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="Numéro"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">Navire</Label>
                      <Input
                        value={formData.navire}
                        onChange={(e) => handleInputChange('navire', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="Nom du navire"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">Pavillon</Label>
                      <Input
                        value={formData.pavilion}
                        onChange={(e) => handleInputChange('pavilion', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="Pavillon"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Ton. Brut</Label>
                        <Input
                          value={formData.tonBrut}
                          onChange={(e) => handleInputChange('tonBrut', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Tonnage brut"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Ton. Net</Label>
                        <Input
                          value={formData.tonNet}
                          onChange={(e) => handleInputChange('tonNet', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Tonnage net"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">T.E avant</Label>
                        <Input
                          value={formData.teAvant}
                          onChange={(e) => handleInputChange('teAvant', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="T.E avant"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">T.E arrière</Label>
                        <Input
                          value={formData.teArriere}
                          onChange={(e) => handleInputChange('teArriere', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="T.E arrière"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ligne de séparation verticale */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
                  
                  {/* Section PILOTE DEMANDÉ */}
                  <Card className="border-2 border-gray-300 ml-4">
                    <CardHeader className="bg-blue-50 py-3">
                      <CardTitle className="text-lg font-bold text-blue-900">PILOTE DEMANDÉ</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Le</Label>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className="mt-1 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Pilote demandé</Label>
                        <Input
                          value={formData.piloteDemande}
                          onChange={(e) => handleInputChange('piloteDemande', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Nom du pilote"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Trajet</Label>
                        <Input
                          value={formData.trajet}
                          onChange={(e) => handleInputChange('trajet', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Trajet"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Section (S)</Label>
                        <Input
                          value={formData.section}
                          onChange={(e) => handleInputChange('section', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Section"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Déhalage</Label>
                        <Input
                          value={formData.dehalage}
                          onChange={(e) => handleInputChange('dehalage', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Déhalage"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Heure Début</Label>
                        <Input
                          type="time"
                          value={formData.heureDebut}
                          onChange={(e) => handleInputChange('heureDebut', e.target.value)}
                          className="mt-1 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Heure d'Arrivée</Label>
                        <Input
                          type="time"
                          value={formData.heureArrivee}
                          onChange={(e) => handleInputChange('heureArrivee', e.target.value)}
                          className="mt-1 border-gray-300"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Secteur</Label>
                        <Input
                          value={formData.secteur}
                          onChange={(e) => handleInputChange('secteur', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Secteur"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Journée (J)</Label>
                        <Input
                          value={formData.journee}
                          onChange={(e) => handleInputChange('journee', e.target.value)}
                          className="mt-1 border-gray-300"
                          placeholder="Journée"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Deux cards horizontales - POB/NP/DM/AHC et Observations */}
              <div className="grid grid-cols-3 gap-6">
                {/* Card POB, NP, DM, AHC - Plus petite */}
                <Card className="border-2 border-gray-300">
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">POB :</Label>
                      <Input
                        value={formData.pob}
                        onChange={(e) => handleInputChange('pob', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="POB"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">NP :</Label>
                      <Input
                        value={formData.np}
                        onChange={(e) => handleInputChange('np', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="NP"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">DM :</Label>
                      <Input
                        value={formData.dm}
                        onChange={(e) => handleInputChange('dm', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="DM"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">AHC :</Label>
                      <Input
                        value={formData.ahc}
                        onChange={(e) => handleInputChange('ahc', e.target.value)}
                        className="mt-1 border-gray-300"
                        placeholder="AHC"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Card Observations - Plus large */}
                <Card className="col-span-2 border-2 border-gray-300">
                  <CardHeader className="bg-blue-50 py-3">
                    <CardTitle className="text-lg font-bold text-blue-900">OBSERVATIONS</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Textarea
                      value={formData.observations}
                      onChange={(e) => handleInputChange('observations', e.target.value)}
                      className="min-h-32 border-gray-300 resize-none"
                      placeholder="Observations et remarques..."
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Card Signatures - Capitaine et Pilotes */}
              <Card className="border-2 border-gray-300">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Capitaine */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
                        CAPITAINE
                      </h3>
                      <div className="mb-4">
                        <Input
                          value={formData.capitaine}
                          onChange={(e) => handleInputChange('capitaine', e.target.value)}
                          className="text-center border-gray-300"
                          placeholder="Nom du capitaine"
                        />
                      </div>
                      <div className="h-20 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm">
                        Signature
                      </div>
                    </div>

                    {/* Pilotes */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-blue-900 mb-4 border-b border-gray-300 pb-2">
                        PILOTES
                      </h3>
                      <div className="space-y-3 mb-4">
                        <div>
                          <Label className="text-sm font-semibold text-gray-700">(1)</Label>
                          <Input
                            value={formData.pilote1}
                            onChange={(e) => handleInputChange('pilote1', e.target.value)}
                            className="text-center border-gray-300"
                            placeholder="Nom du pilote 1"
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-semibold text-gray-700">(2)</Label>
                          <Input
                            value={formData.pilote2}
                            onChange={(e) => handleInputChange('pilote2', e.target.value)}
                            className="text-center border-gray-300"
                            placeholder="Nom du pilote 2"
                          />
                        </div>
                      </div>
                      <div className="h-20 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm">
                        Signatures
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* DEUXIÈME COLONNE - Plus petite */}
            <div className="col-span-4 space-y-6">
              {/* Header République Démocratique du Congo + Logo */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-lg font-bold text-blue-900">RÉPUBLIQUE DÉMOCRATIQUE DU CONGO</h3>
                  <div className="bg-white p-1 rounded shadow-sm">
                    <img 
                      src="https://cvm-sa.com/wp-content/uploads/2023/11/cropped-cvm-removebg-preview-1.png" 
                      alt="CVM Logo" 
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-700 font-medium">
                  CONGOLAISE DES VOIES MARITIMES<br />
                  DIRECTION D'EXPLOITATION
                </p>
              </div>

              {/* Autres infos sur AGENCE */}
              <Card className="border-2 border-gray-300">
                <CardHeader className="bg-blue-50 py-3">
                  <CardTitle className="text-lg font-bold text-blue-900">AGENCE</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Date (J)</Label>
                    <Input
                      type="date"
                      className="mt-1 border-gray-300"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Navire</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Nom du navire"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Ton. Brut</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Tonnage brut"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Trajet</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Trajet"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Section (S)</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Section"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Déhalage</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Déhalage"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Journée (J)</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Journée"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700">Secteur</Label>
                    <Input
                      className="mt-1 border-gray-300"
                      placeholder="Secteur"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Place signature PILOTES */}
              <Card className="border-2 border-gray-300">
                <CardHeader className="bg-blue-50 py-3">
                  <CardTitle className="text-lg font-bold text-blue-900 text-center">PILOTES</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">(1)</Label>
                      <Input
                        className="mt-1 border-gray-300 text-center"
                        placeholder="Nom du pilote 1"
                      />
                      <div className="h-16 border-2 border-dashed border-gray-300 mt-2 flex items-center justify-center text-gray-500 text-sm">
                        Signature
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">(2)</Label>
                      <Input
                        className="mt-1 border-gray-300 text-center"
                        placeholder="Nom du pilote 2"
                      />
                      <div className="h-16 border-2 border-dashed border-gray-300 mt-2 flex items-center justify-center text-gray-500 text-sm">
                        Signature
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Place signature CAPITAINE */}
              <Card className="border-2 border-gray-300">
                <CardHeader className="bg-blue-50 py-3">
                  <CardTitle className="text-lg font-bold text-blue-900 text-center">CAPITAINE</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <Input
                    className="mb-4 border-gray-300 text-center"
                    placeholder="Nom du capitaine"
                  />
                  <div className="h-20 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm">
                    Signature
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Enregistrer le Bulletin de Pilotage
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}