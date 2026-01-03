import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgms")
export default class DgmController {
  @operation({
    summary: "Get Dgms",
  })
  @get()
  static getDgms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgm",
  })
  @post("{id}")
  static createDgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
