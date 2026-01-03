import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjs")
export default class CjsController {
  @operation({
    summary: "Get Cjs",
  })
  @get()
  static getCjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjs",
  })
  @post("{id}")
  static createCjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
