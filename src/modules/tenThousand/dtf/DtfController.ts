import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtf")
export default class DtfController {
  @operation({
    summary: "Get Dtf",
  })
  @get()
  static getDtf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtf",
  })
  @post("{id}")
  static createDtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
