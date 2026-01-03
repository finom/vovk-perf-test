import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnms")
export default class BnmController {
  @operation({
    summary: "Get Bnms",
  })
  @get()
  static getBnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnm",
  })
  @post("{id}")
  static createBnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
