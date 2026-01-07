import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bk")
export default class BkController {
  @operation({
    summary: "Get Bk",
  })
  @get()
  static getBk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bk",
  })
  @post("{id}")
  static createBk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
