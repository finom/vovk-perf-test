import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyhs")
export default class DyhController {
  @operation({
    summary: "Get Dyhs",
  })
  @get()
  static getDyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyh",
  })
  @post("{id}")
  static createDyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
