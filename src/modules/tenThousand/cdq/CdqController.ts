import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdq")
export default class CdqController {
  @operation({
    summary: "Get Cdq",
  })
  @get()
  static getCdq = procedure({
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
