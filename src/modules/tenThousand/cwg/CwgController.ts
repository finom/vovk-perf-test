import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwg")
export default class CwgController {
  @operation({
    summary: "Get Cwg",
  })
  @get()
  static getCwg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwg",
  })
  @post("{id}")
  static createCwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
