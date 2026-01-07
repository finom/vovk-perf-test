import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrg")
export default class LrgController {
  @operation({
    summary: "Get Lrg",
  })
  @get()
  static getLrg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrg",
  })
  @post("{id}")
  static createLrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
