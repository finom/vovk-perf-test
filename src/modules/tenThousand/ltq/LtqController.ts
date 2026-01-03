import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltqs")
export default class LtqController {
  @operation({
    summary: "Get Ltqs",
  })
  @get()
  static getLtqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltq",
  })
  @post("{id}")
  static createLtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
