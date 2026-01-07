import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnf")
export default class BnfController {
  @operation({
    summary: "Get Bnf",
  })
  @get()
  static getBnf = procedure({
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
