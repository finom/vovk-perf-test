import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvr")
export default class DvrController {
  @operation({
    summary: "Get Dvr",
  })
  @get()
  static getDvr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dvr",
  })
  @post("{id}")
  static createDvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
