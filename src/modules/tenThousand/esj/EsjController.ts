import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esj")
export default class EsjController {
  @operation({
    summary: "Get Esj",
  })
  @get()
  static getEsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esj",
  })
  @post("{id}")
  static createEsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
