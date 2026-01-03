import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acas")
export default class AcaController {
  @operation({
    summary: "Get Acas",
  })
  @get()
  static getAcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aca",
  })
  @post("{id}")
  static createAca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
