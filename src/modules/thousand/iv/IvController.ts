import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivs")
export default class IvController {
  @operation({
    summary: "Get Ivs",
  })
  @get()
  static getIvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iv",
  })
  @post("{id}")
  static createIv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
