import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkgs")
export default class DkgController {
  @operation({
    summary: "Get Dkgs",
  })
  @get()
  static getDkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkg",
  })
  @post("{id}")
  static createDkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
