import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boj")
export default class BojController {
  @operation({
    summary: "Get Boj",
  })
  @get()
  static getBoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boj",
  })
  @post("{id}")
  static createBoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
