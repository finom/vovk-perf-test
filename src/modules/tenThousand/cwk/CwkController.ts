import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwks")
export default class CwkController {
  @operation({
    summary: "Get Cwks",
  })
  @get()
  static getCwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwk",
  })
  @post("{id}")
  static createCwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
