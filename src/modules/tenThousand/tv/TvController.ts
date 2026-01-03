import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tvs")
export default class TvController {
  @operation({
    summary: "Get Tvs",
  })
  @get()
  static getTvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tv",
  })
  @post("{id}")
  static createTv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
