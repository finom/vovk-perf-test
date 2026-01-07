import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byw")
export default class BywController {
  @operation({
    summary: "Get Byw",
  })
  @get()
  static getByw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byw",
  })
  @post("{id}")
  static createByw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
