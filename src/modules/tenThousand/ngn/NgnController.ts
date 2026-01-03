import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngns")
export default class NgnController {
  @operation({
    summary: "Get Ngns",
  })
  @get()
  static getNgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngn",
  })
  @post("{id}")
  static createNgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
