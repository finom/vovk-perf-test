import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtts")
export default class GttController {
  @operation({
    summary: "Get Gtts",
  })
  @get()
  static getGtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtt",
  })
  @post("{id}")
  static createGtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
