import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bti")
export default class BtiController {
  @operation({
    summary: "Get Bti",
  })
  @get()
  static getBti = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bti",
  })
  @post("{id}")
  static createBti = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
