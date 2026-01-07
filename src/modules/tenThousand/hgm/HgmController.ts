import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgm")
export default class HgmController {
  @operation({
    summary: "Get Hgm",
  })
  @get()
  static getHgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgm",
  })
  @post("{id}")
  static createHgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
