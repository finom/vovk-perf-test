import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqv")
export default class BqvController {
  @operation({
    summary: "Get Bqv",
  })
  @get()
  static getBqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqv",
  })
  @post("{id}")
  static createBqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
