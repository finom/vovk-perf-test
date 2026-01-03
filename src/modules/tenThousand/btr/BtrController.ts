import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btrs")
export default class BtrController {
  @operation({
    summary: "Get Btrs",
  })
  @get()
  static getBtrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btr",
  })
  @post("{id}")
  static createBtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
