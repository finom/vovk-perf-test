import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilvs")
export default class IlvController {
  @operation({
    summary: "Get Ilvs",
  })
  @get()
  static getIlvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilv",
  })
  @post("{id}")
  static createIlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
