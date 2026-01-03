import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpzs")
export default class DpzController {
  @operation({
    summary: "Get Dpzs",
  })
  @get()
  static getDpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dpz",
  })
  @post("{id}")
  static createDpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
