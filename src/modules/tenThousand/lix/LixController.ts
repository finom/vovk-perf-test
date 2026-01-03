import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lixes")
export default class LixController {
  @operation({
    summary: "Get Lixes",
  })
  @get()
  static getLixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lix",
  })
  @post("{id}")
  static createLix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
