import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boc")
export default class BocController {
  @operation({
    summary: "Get Boc",
  })
  @get()
  static getBoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boc",
  })
  @post("{id}")
  static createBoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
