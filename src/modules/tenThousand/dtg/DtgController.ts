import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtg")
export default class DtgController {
  @operation({
    summary: "Get Dtg",
  })
  @get()
  static getDtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtg",
  })
  @post("{id}")
  static createDtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
