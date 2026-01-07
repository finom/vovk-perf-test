import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwu")
export default class BwuController {
  @operation({
    summary: "Get Bwu",
  })
  @get()
  static getBwu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwu",
  })
  @post("{id}")
  static createBwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
