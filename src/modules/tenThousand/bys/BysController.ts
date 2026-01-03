import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bys")
export default class BysController {
  @operation({
    summary: "Get Bys",
  })
  @get()
  static getBys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bys",
  })
  @post("{id}")
  static createBys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
