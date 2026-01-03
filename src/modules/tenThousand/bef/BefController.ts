import { procedure, prefix, get, post, operation } from "vovk";

@prefix("befs")
export default class BefController {
  @operation({
    summary: "Get Befs",
  })
  @get()
  static getBefs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bef",
  })
  @post("{id}")
  static createBef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
