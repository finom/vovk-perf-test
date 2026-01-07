import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljk")
export default class LjkController {
  @operation({
    summary: "Get Ljk",
  })
  @get()
  static getLjk = procedure({
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
