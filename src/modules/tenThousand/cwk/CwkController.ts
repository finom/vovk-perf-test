import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwk")
export default class CwkController {
  @operation({
    summary: "Get Cwk",
  })
  @get()
  static getCwk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwk",
  })
  @post("{id}")
  static createCwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
