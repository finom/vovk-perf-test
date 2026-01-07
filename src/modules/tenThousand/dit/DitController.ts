import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dit")
export default class DitController {
  @operation({
    summary: "Get Dit",
  })
  @get()
  static getDit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dit",
  })
  @post("{id}")
  static createDit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
