import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltms")
export default class LtmController {
  @operation({
    summary: "Get Ltms",
  })
  @get()
  static getLtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltm",
  })
  @post("{id}")
  static createLtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
