import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltb")
export default class LtbController {
  @operation({
    summary: "Get Ltb",
  })
  @get()
  static getLtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltb",
  })
  @post("{id}")
  static createLtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
