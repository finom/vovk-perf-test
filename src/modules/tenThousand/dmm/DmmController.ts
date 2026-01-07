import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmm")
export default class DmmController {
  @operation({
    summary: "Get Dmm",
  })
  @get()
  static getDmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmm",
  })
  @post("{id}")
  static createDmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
