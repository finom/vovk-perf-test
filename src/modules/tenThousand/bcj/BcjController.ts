import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcj")
export default class BcjController {
  @operation({
    summary: "Get Bcj",
  })
  @get()
  static getBcj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcj",
  })
  @post("{id}")
  static createBcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
