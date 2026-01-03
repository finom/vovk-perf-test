import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dgns")
export default class DgnController {
  @operation({
    summary: "Get Dgns",
  })
  @get()
  static getDgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dgn",
  })
  @post("{id}")
  static createDgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
