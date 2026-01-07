import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqk")
export default class BqkController {
  @operation({
    summary: "Get Bqk",
  })
  @get()
  static getBqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqk",
  })
  @post("{id}")
  static createBqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
