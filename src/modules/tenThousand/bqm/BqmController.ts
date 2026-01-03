import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqms")
export default class BqmController {
  @operation({
    summary: "Get Bqms",
  })
  @get()
  static getBqms = procedure({
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
