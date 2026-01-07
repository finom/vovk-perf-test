import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfv")
export default class BfvController {
  @operation({
    summary: "Get Bfv",
  })
  @get()
  static getBfv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfv",
  })
  @post("{id}")
  static createBfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
