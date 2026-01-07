import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwl")
export default class MwlController {
  @operation({
    summary: "Get Mwl",
  })
  @get()
  static getMwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwl",
  })
  @post("{id}")
  static createMwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
