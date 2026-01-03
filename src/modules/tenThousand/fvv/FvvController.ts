import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvvs")
export default class FvvController {
  @operation({
    summary: "Get Fvvs",
  })
  @get()
  static getFvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvv",
  })
  @post("{id}")
  static createFvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
