import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bches")
export default class BchController {
  @operation({
    summary: "Get Bches",
  })
  @get()
  static getBches = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bch",
  })
  @post("{id}")
  static createBch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
