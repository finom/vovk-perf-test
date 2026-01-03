import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsqs")
export default class DsqController {
  @operation({
    summary: "Get Dsqs",
  })
  @get()
  static getDsqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsq",
  })
  @post("{id}")
  static createDsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
