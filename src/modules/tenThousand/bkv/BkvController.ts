import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkv")
export default class BkvController {
  @operation({
    summary: "Get Bkv",
  })
  @get()
  static getBkv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkv",
  })
  @post("{id}")
  static createBkv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
