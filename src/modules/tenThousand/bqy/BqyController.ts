import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqy")
export default class BqyController {
  @operation({
    summary: "Get Bqy",
  })
  @get()
  static getBqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqy",
  })
  @post("{id}")
  static createBqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
