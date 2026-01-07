import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlx")
export default class HlxController {
  @operation({
    summary: "Get Hlx",
  })
  @get()
  static getHlx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlx",
  })
  @post("{id}")
  static createHlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
