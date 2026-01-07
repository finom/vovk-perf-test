import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqo")
export default class BqoController {
  @operation({
    summary: "Get Bqo",
  })
  @get()
  static getBqo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqo",
  })
  @post("{id}")
  static createBqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
