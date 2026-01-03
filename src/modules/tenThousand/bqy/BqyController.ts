import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqies")
export default class BqyController {
  @operation({
    summary: "Get Bqies",
  })
  @get()
  static getBqies = procedure({
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
