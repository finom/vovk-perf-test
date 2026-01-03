import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqhs")
export default class BqhController {
  @operation({
    summary: "Get Bqhs",
  })
  @get()
  static getBqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqh",
  })
  @post("{id}")
  static createBqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
