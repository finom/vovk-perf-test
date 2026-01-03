import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etms")
export default class EtmController {
  @operation({
    summary: "Get Etms",
  })
  @get()
  static getEtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etm",
  })
  @post("{id}")
  static createEtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
