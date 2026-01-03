import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwws")
export default class BwwController {
  @operation({
    summary: "Get Bwws",
  })
  @get()
  static getBwws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bww",
  })
  @post("{id}")
  static createBww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
