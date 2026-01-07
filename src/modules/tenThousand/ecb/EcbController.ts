import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecb")
export default class EcbController {
  @operation({
    summary: "Get Ecb",
  })
  @get()
  static getEcb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecb",
  })
  @post("{id}")
  static createEcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
