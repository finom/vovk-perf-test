import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bncs")
export default class BncController {
  @operation({
    summary: "Get Bncs",
  })
  @get()
  static getBncs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnc",
  })
  @post("{id}")
  static createBnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
