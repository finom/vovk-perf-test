import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dujs")
export default class DujController {
  @operation({
    summary: "Get Dujs",
  })
  @get()
  static getDujs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Duj",
  })
  @post("{id}")
  static createDuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
