import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgm")
export default class DgmController {
  @operation({
    summary: "Get Dgm",
  })
  @get()
  static getDgm = procedure({
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
