import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myl")
export default class MylController {
  @operation({
    summary: "Get Myl",
  })
  @get()
  static getMyl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myl",
  })
  @post("{id}")
  static createMyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
