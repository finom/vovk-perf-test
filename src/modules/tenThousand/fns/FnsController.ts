import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fns")
export default class FnsController {
  @operation({
    summary: "Get Fns",
  })
  @get()
  static getFns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fns",
  })
  @post("{id}")
  static createFns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
