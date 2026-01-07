import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbb")
export default class DbbController {
  @operation({
    summary: "Get Dbb",
  })
  @get()
  static getDbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbb",
  })
  @post("{id}")
  static createDbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
