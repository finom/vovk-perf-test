import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfk")
export default class BfkController {
  @operation({
    summary: "Get Bfk",
  })
  @get()
  static getBfk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfk",
  })
  @post("{id}")
  static createBfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
