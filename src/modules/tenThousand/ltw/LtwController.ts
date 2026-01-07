import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltw")
export default class LtwController {
  @operation({
    summary: "Get Ltw",
  })
  @get()
  static getLtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltw",
  })
  @post("{id}")
  static createLtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
