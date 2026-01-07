import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdw")
export default class CdwController {
  @operation({
    summary: "Get Cdw",
  })
  @get()
  static getCdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdw",
  })
  @post("{id}")
  static createCdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
