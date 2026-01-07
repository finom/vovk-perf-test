import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwg")
export default class MwgController {
  @operation({
    summary: "Get Mwg",
  })
  @get()
  static getMwg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwg",
  })
  @post("{id}")
  static createMwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
