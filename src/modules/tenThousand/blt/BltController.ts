import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blts")
export default class BltController {
  @operation({
    summary: "Get Blts",
  })
  @get()
  static getBlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blt",
  })
  @post("{id}")
  static createBlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
