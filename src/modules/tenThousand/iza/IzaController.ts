import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izas")
export default class IzaController {
  @operation({
    summary: "Get Izas",
  })
  @get()
  static getIzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iza",
  })
  @post("{id}")
  static createIza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
