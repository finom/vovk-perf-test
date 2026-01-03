import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljks")
export default class LjkController {
  @operation({
    summary: "Get Ljks",
  })
  @get()
  static getLjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljk",
  })
  @post("{id}")
  static createLjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
