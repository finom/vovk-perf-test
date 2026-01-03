import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgns")
export default class CgnController {
  @operation({
    summary: "Get Cgns",
  })
  @get()
  static getCgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgn",
  })
  @post("{id}")
  static createCgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
