import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwks")
export default class FwkController {
  @operation({
    summary: "Get Fwks",
  })
  @get()
  static getFwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwk",
  })
  @post("{id}")
  static createFwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
