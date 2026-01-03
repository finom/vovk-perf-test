import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvks")
export default class FvkController {
  @operation({
    summary: "Get Fvks",
  })
  @get()
  static getFvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvk",
  })
  @post("{id}")
  static createFvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
