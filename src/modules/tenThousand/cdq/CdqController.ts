import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdqs")
export default class CdqController {
  @operation({
    summary: "Get Cdqs",
  })
  @get()
  static getCdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdq",
  })
  @post("{id}")
  static createCdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
