import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eccs")
export default class EccController {
  @operation({
    summary: "Get Eccs",
  })
  @get()
  static getEccs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecc",
  })
  @post("{id}")
  static createEcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
