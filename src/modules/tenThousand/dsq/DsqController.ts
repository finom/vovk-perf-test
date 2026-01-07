import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsq")
export default class DsqController {
  @operation({
    summary: "Get Dsq",
  })
  @get()
  static getDsq = procedure({
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
