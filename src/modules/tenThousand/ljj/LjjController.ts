import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljjs")
export default class LjjController {
  @operation({
    summary: "Get Ljjs",
  })
  @get()
  static getLjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljj",
  })
  @post("{id}")
  static createLjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
