import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcc")
export default class LccController {
  @operation({
    summary: "Get Lcc",
  })
  @get()
  static getLcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcc",
  })
  @post("{id}")
  static createLcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
