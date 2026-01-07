import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtb")
export default class DtbController {
  @operation({
    summary: "Get Dtb",
  })
  @get()
  static getDtb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtb",
  })
  @post("{id}")
  static createDtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
