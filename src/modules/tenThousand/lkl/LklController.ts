import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkl")
export default class LklController {
  @operation({
    summary: "Get Lkl",
  })
  @get()
  static getLkl = procedure({
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
