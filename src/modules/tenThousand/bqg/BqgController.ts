import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqg")
export default class BqgController {
  @operation({
    summary: "Get Bqg",
  })
  @get()
  static getBqg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqg",
  })
  @post("{id}")
  static createBqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
