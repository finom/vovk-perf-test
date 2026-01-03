import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtvs")
export default class DtvController {
  @operation({
    summary: "Get Dtvs",
  })
  @get()
  static getDtvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtv",
  })
  @post("{id}")
  static createDtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
