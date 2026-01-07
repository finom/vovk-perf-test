import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvr")
export default class FvrController {
  @operation({
    summary: "Get Fvr",
  })
  @get()
  static getFvr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvr",
  })
  @post("{id}")
  static createFvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
