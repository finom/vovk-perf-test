import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgns")
export default class HgnController {
  @operation({
    summary: "Get Hgns",
  })
  @get()
  static getHgns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgn",
  })
  @post("{id}")
  static createHgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
