import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fshes")
export default class FshController {
  @operation({
    summary: "Get Fshes",
  })
  @get()
  static getFshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsh",
  })
  @post("{id}")
  static createFsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
