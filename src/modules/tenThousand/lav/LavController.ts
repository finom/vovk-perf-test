import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lav")
export default class LavController {
  @operation({
    summary: "Get Lav",
  })
  @get()
  static getLav = procedure({
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
