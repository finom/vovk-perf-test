import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwt")
export default class BwtController {
  @operation({
    summary: "Get Bwt",
  })
  @get()
  static getBwt = procedure({
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
