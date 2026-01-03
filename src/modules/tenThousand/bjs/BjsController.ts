import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjs")
export default class BjsController {
  @operation({
    summary: "Get Bjs",
  })
  @get()
  static getBjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjs",
  })
  @post("{id}")
  static createBjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
