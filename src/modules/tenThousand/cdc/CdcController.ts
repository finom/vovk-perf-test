import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdc")
export default class CdcController {
  @operation({
    summary: "Get Cdc",
  })
  @get()
  static getCdc = procedure({
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
