import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltq")
export default class LtqController {
  @operation({
    summary: "Get Ltq",
  })
  @get()
  static getLtq = procedure({
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
