import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwvs")
export default class BwvController {
  @operation({
    summary: "Get Bwvs",
  })
  @get()
  static getBwvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwv",
  })
  @post("{id}")
  static createBwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
