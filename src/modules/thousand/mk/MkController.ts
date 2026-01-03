import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mks")
export default class MkController {
  @operation({
    summary: "Get Mks",
  })
  @get()
  static getMks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mk",
  })
  @post("{id}")
  static createMk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
