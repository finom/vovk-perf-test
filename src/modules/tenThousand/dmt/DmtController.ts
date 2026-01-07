import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmt")
export default class DmtController {
  @operation({
    summary: "Get Dmt",
  })
  @get()
  static getDmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmt",
  })
  @post("{id}")
  static createDmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
