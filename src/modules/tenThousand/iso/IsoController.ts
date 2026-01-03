import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isos")
export default class IsoController {
  @operation({
    summary: "Get Isos",
  })
  @get()
  static getIsos = procedure({
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
