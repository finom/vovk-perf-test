import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggzs")
export default class GgzController {
  @operation({
    summary: "Get Ggzs",
  })
  @get()
  static getGgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggz",
  })
  @post("{id}")
  static createGgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
