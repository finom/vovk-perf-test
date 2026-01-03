import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggxes")
export default class GgxController {
  @operation({
    summary: "Get Ggxes",
  })
  @get()
  static getGgxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggx",
  })
  @post("{id}")
  static createGgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
