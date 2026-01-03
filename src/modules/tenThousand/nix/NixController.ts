import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nixes")
export default class NixController {
  @operation({
    summary: "Get Nixes",
  })
  @get()
  static getNixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nix",
  })
  @post("{id}")
  static createNix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
