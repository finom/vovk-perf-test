import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltg")
export default class LtgController {
  @operation({
    summary: "Get Ltg",
  })
  @get()
  static getLtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltg",
  })
  @post("{id}")
  static createLtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
