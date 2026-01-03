import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dygs")
export default class DygController {
  @operation({
    summary: "Get Dygs",
  })
  @get()
  static getDygs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyg",
  })
  @post("{id}")
  static createDyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
