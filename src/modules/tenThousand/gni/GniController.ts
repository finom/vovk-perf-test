import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnis")
export default class GniController {
  @operation({
    summary: "Get Gnis",
  })
  @get()
  static getGnis = procedure({
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
