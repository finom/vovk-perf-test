import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkl")
export default class GklController {
  @operation({
    summary: "Get Gkl",
  })
  @get()
  static getGkl = procedure({
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
