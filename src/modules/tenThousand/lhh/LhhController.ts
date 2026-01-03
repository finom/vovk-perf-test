import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhhs")
export default class LhhController {
  @operation({
    summary: "Get Lhhs",
  })
  @get()
  static getLhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhh",
  })
  @post("{id}")
  static createLhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
