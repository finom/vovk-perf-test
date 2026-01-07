import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtc")
export default class DtcController {
  @operation({
    summary: "Get Dtc",
  })
  @get()
  static getDtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtc",
  })
  @post("{id}")
  static createDtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
