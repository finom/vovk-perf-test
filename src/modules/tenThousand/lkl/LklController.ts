import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkls")
export default class LklController {
  @operation({
    summary: "Get Lkls",
  })
  @get()
  static getLkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkl",
  })
  @post("{id}")
  static createLkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
