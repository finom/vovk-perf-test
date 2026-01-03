import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqns")
export default class BqnController {
  @operation({
    summary: "Get Bqns",
  })
  @get()
  static getBqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqn",
  })
  @post("{id}")
  static createBqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
