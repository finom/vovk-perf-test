import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uf")
export default class UfController {
  @operation({
    summary: "Get Uf",
  })
  @get()
  static getUf = procedure({
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
