import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfc")
export default class DfcController {
  @operation({
    summary: "Get Dfc",
  })
  @get()
  static getDfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfc",
  })
  @post("{id}")
  static createDfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
