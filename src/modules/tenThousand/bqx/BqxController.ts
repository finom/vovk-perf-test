import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqx")
export default class BqxController {
  @operation({
    summary: "Get Bqx",
  })
  @get()
  static getBqx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqx",
  })
  @post("{id}")
  static createBqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
