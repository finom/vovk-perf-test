import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gni")
export default class GniController {
  @operation({
    summary: "Get Gni",
  })
  @get()
  static getGni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gni",
  })
  @post("{id}")
  static createGni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
