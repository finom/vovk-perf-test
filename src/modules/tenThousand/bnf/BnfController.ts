import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnfs")
export default class BnfController {
  @operation({
    summary: "Get Bnfs",
  })
  @get()
  static getBnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnf",
  })
  @post("{id}")
  static createBnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
