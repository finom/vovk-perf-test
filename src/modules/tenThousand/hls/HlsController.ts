import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hls")
export default class HlsController {
  @operation({
    summary: "Get Hls",
  })
  @get()
  static getHls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hls",
  })
  @post("{id}")
  static createHls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
