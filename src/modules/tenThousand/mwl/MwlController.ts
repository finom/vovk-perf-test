import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwls")
export default class MwlController {
  @operation({
    summary: "Get Mwls",
  })
  @get()
  static getMwls = procedure({
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
