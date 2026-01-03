import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmps")
export default class FmpController {
  @operation({
    summary: "Get Fmps",
  })
  @get()
  static getFmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmp",
  })
  @post("{id}")
  static createFmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
