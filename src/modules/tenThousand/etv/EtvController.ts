import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etv")
export default class EtvController {
  @operation({
    summary: "Get Etv",
  })
  @get()
  static getEtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etv",
  })
  @post("{id}")
  static createEtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
