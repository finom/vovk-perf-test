import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lll")
export default class LllController {
  @operation({
    summary: "Get Lll",
  })
  @get()
  static getLll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lll",
  })
  @post("{id}")
  static createLll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
