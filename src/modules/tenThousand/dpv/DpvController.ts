import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpvs")
export default class DpvController {
  @operation({
    summary: "Get Dpvs",
  })
  @get()
  static getDpvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpv",
  })
  @post("{id}")
  static createDpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
