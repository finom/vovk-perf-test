import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwxes")
export default class BwxController {
  @operation({
    summary: "Get Bwxes",
  })
  @get()
  static getBwxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwx",
  })
  @post("{id}")
  static createBwx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
