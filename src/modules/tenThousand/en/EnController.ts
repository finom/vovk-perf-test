import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ens")
export default class EnController {
  @operation({
    summary: "Get Ens",
  })
  @get()
  static getEns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create En",
  })
  @post("{id}")
  static createEn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
