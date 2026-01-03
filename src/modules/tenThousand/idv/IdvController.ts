import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idvs")
export default class IdvController {
  @operation({
    summary: "Get Idvs",
  })
  @get()
  static getIdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idv",
  })
  @post("{id}")
  static createIdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
