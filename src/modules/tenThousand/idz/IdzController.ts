import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idzs")
export default class IdzController {
  @operation({
    summary: "Get Idzs",
  })
  @get()
  static getIdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idz",
  })
  @post("{id}")
  static createIdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
