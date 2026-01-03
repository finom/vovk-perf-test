import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejes")
export default class EjeController {
  @operation({
    summary: "Get Ejes",
  })
  @get()
  static getEjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eje",
  })
  @post("{id}")
  static createEje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
