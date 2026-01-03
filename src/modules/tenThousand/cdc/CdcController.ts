import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdcs")
export default class CdcController {
  @operation({
    summary: "Get Cdcs",
  })
  @get()
  static getCdcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdc",
  })
  @post("{id}")
  static createCdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
