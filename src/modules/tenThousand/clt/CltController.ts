import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clts")
export default class CltController {
  @operation({
    summary: "Get Clts",
  })
  @get()
  static getClts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clt",
  })
  @post("{id}")
  static createClt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
