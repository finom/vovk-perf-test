import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkls")
export default class GklController {
  @operation({
    summary: "Get Gkls",
  })
  @get()
  static getGkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkl",
  })
  @post("{id}")
  static createGkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
