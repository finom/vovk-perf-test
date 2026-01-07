import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilv")
export default class IlvController {
  @operation({
    summary: "Get Ilv",
  })
  @get()
  static getIlv = procedure({
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
