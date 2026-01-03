import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtcs")
export default class DtcController {
  @operation({
    summary: "Get Dtcs",
  })
  @get()
  static getDtcs = procedure({
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
