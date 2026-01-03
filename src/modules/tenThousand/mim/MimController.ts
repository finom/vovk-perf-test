import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mims")
export default class MimController {
  @operation({
    summary: "Get Mims",
  })
  @get()
  static getMims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mim",
  })
  @post("{id}")
  static createMim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
