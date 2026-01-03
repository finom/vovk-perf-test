import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eois")
export default class EoiController {
  @operation({
    summary: "Get Eois",
  })
  @get()
  static getEois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoi",
  })
  @post("{id}")
  static createEoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
