import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvt")
export default class DvtController {
  @operation({
    summary: "Get Dvt",
  })
  @get()
  static getDvt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvt",
  })
  @post("{id}")
  static createDvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
