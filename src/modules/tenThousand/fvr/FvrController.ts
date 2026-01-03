import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvrs")
export default class FvrController {
  @operation({
    summary: "Get Fvrs",
  })
  @get()
  static getFvrs = procedure({
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
