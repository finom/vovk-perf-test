import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llu")
export default class LluController {
  @operation({
    summary: "Get Llu",
  })
  @get()
  static getLlu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llu",
  })
  @post("{id}")
  static createLlu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
