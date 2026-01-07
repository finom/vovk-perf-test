import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyh")
export default class LyhController {
  @operation({
    summary: "Get Lyh",
  })
  @get()
  static getLyh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyh",
  })
  @post("{id}")
  static createLyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
