import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esms")
export default class EsmController {
  @operation({
    summary: "Get Esms",
  })
  @get()
  static getEsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esm",
  })
  @post("{id}")
  static createEsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
