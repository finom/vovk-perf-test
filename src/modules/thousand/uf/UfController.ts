import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ufs")
export default class UfController {
  @operation({
    summary: "Get Ufs",
  })
  @get()
  static getUfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uf",
  })
  @post("{id}")
  static createUf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
