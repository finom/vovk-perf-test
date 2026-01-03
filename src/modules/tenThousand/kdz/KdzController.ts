import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdzs")
export default class KdzController {
  @operation({
    summary: "Get Kdzs",
  })
  @get()
  static getKdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdz",
  })
  @post("{id}")
  static createKdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
