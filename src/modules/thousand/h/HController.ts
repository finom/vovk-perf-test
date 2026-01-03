import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hs")
export default class HController {
  @operation({
    summary: "Get HS",
  })
  @get()
  static getHS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create H",
  })
  @post("{id}")
  static createH = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
