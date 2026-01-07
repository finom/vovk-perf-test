import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltv")
export default class LtvController {
  @operation({
    summary: "Get Ltv",
  })
  @get()
  static getLtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltv",
  })
  @post("{id}")
  static createLtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
