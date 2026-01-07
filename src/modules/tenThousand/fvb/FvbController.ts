import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvb")
export default class FvbController {
  @operation({
    summary: "Get Fvb",
  })
  @get()
  static getFvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvb",
  })
  @post("{id}")
  static createFvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
