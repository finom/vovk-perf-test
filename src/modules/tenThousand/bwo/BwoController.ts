import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwos")
export default class BwoController {
  @operation({
    summary: "Get Bwos",
  })
  @get()
  static getBwos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwo",
  })
  @post("{id}")
  static createBwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
