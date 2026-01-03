import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etjs")
export default class EtjController {
  @operation({
    summary: "Get Etjs",
  })
  @get()
  static getEtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etj",
  })
  @post("{id}")
  static createEtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
