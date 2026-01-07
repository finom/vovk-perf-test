import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqn")
export default class BqnController {
  @operation({
    summary: "Get Bqn",
  })
  @get()
  static getBqn = procedure({
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
