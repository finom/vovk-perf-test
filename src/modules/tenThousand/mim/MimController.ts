import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mim")
export default class MimController {
  @operation({
    summary: "Get Mim",
  })
  @get()
  static getMim = procedure({
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
