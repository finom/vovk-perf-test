import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kres")
export default class KreController {
  @operation({
    summary: "Get Kres",
  })
  @get()
  static getKres = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kre",
  })
  @post("{id}")
  static createKre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
