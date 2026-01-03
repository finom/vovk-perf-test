import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkzs")
export default class DkzController {
  @operation({
    summary: "Get Dkzs",
  })
  @get()
  static getDkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dkz",
  })
  @post("{id}")
  static createDkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
