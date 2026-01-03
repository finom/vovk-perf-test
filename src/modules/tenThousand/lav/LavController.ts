import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lavs")
export default class LavController {
  @operation({
    summary: "Get Lavs",
  })
  @get()
  static getLavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lav",
  })
  @post("{id}")
  static createLav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
