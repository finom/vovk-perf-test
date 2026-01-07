import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltl")
export default class LtlController {
  @operation({
    summary: "Get Ltl",
  })
  @get()
  static getLtl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltl",
  })
  @post("{id}")
  static createLtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
