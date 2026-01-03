import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dots")
export default class DotController {
  @operation({
    summary: "Get Dots",
  })
  @get()
  static getDots = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dot",
  })
  @post("{id}")
  static createDot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
