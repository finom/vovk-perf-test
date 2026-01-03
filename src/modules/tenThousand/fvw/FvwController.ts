import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvws")
export default class FvwController {
  @operation({
    summary: "Get Fvws",
  })
  @get()
  static getFvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvw",
  })
  @post("{id}")
  static createFvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
