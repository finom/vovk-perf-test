import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqm")
export default class BqmController {
  @operation({
    summary: "Get Bqm",
  })
  @get()
  static getBqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqm",
  })
  @post("{id}")
  static createBqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
