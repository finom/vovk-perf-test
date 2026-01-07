import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mky")
export default class MkyController {
  @operation({
    summary: "Get Mky",
  })
  @get()
  static getMky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mky",
  })
  @post("{id}")
  static createMky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
