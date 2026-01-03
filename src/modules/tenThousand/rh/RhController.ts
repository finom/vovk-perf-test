import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rhs")
export default class RhController {
  @operation({
    summary: "Get Rhs",
  })
  @get()
  static getRhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rh",
  })
  @post("{id}")
  static createRh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
