import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqj")
export default class BqjController {
  @operation({
    summary: "Get Bqj",
  })
  @get()
  static getBqj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqj",
  })
  @post("{id}")
  static createBqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
