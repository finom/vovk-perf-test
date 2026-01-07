import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fql")
export default class FqlController {
  @operation({
    summary: "Get Fql",
  })
  @get()
  static getFql = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fql",
  })
  @post("{id}")
  static createFql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
