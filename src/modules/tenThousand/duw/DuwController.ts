import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duws")
export default class DuwController {
  @operation({
    summary: "Get Duws",
  })
  @get()
  static getDuws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duw",
  })
  @post("{id}")
  static createDuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
