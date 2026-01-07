import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iso")
export default class IsoController {
  @operation({
    summary: "Get Iso",
  })
  @get()
  static getIso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iso",
  })
  @post("{id}")
  static createIso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
