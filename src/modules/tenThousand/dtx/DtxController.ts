import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtxes")
export default class DtxController {
  @operation({
    summary: "Get Dtxes",
  })
  @get()
  static getDtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtx",
  })
  @post("{id}")
  static createDtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
