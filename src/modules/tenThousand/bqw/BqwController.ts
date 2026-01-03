import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqws")
export default class BqwController {
  @operation({
    summary: "Get Bqws",
  })
  @get()
  static getBqws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqw",
  })
  @post("{id}")
  static createBqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
