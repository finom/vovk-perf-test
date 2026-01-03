import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwts")
export default class BwtController {
  @operation({
    summary: "Get Bwts",
  })
  @get()
  static getBwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwt",
  })
  @post("{id}")
  static createBwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
