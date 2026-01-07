import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhh")
export default class LhhController {
  @operation({
    summary: "Get Lhh",
  })
  @get()
  static getLhh = procedure({
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
