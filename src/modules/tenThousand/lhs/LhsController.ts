import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhs")
export default class LhsController {
  @operation({
    summary: "Get Lhs",
  })
  @get()
  static getLhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhs",
  })
  @post("{id}")
  static createLhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
