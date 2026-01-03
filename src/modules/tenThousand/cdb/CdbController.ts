import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdbs")
export default class CdbController {
  @operation({
    summary: "Get Cdbs",
  })
  @get()
  static getCdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdb",
  })
  @post("{id}")
  static createCdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
