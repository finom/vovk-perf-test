import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wl")
export default class WlController {
  @operation({
    summary: "Get Wl",
  })
  @get()
  static getWl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wl",
  })
  @post("{id}")
  static createWl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
