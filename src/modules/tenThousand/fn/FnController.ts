import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fn")
export default class FnController {
  @operation({
    summary: "Get Fn",
  })
  @get()
  static getFn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fn",
  })
  @post("{id}")
  static createFn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
