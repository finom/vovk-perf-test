import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqzs")
export default class BqzController {
  @operation({
    summary: "Get Bqzs",
  })
  @get()
  static getBqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqz",
  })
  @post("{id}")
  static createBqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
