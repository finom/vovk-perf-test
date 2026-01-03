import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpks")
export default class DpkController {
  @operation({
    summary: "Get Dpks",
  })
  @get()
  static getDpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpk",
  })
  @post("{id}")
  static createDpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
