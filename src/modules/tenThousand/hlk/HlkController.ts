import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlk")
export default class HlkController {
  @operation({
    summary: "Get Hlk",
  })
  @get()
  static getHlk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlk",
  })
  @post("{id}")
  static createHlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
