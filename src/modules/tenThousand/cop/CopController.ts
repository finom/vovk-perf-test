import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cop")
export default class CopController {
  @operation({
    summary: "Get Cop",
  })
  @get()
  static getCop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cop",
  })
  @post("{id}")
  static createCop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
