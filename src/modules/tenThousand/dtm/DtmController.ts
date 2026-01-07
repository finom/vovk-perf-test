import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtm")
export default class DtmController {
  @operation({
    summary: "Get Dtm",
  })
  @get()
  static getDtm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtm",
  })
  @post("{id}")
  static createDtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
