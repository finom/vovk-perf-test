import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yts")
export default class YtController {
  @operation({
    summary: "Get Yts",
  })
  @get()
  static getYts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yt",
  })
  @post("{id}")
  static createYt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
