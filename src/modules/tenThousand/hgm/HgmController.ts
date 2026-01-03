import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgms")
export default class HgmController {
  @operation({
    summary: "Get Hgms",
  })
  @get()
  static getHgms = procedure({
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
