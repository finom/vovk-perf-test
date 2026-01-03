import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekis")
export default class EkiController {
  @operation({
    summary: "Get Ekis",
  })
  @get()
  static getEkis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eki",
  })
  @post("{id}")
  static createEki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
