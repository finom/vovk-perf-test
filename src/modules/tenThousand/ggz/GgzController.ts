import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggz")
export default class GgzController {
  @operation({
    summary: "Get Ggz",
  })
  @get()
  static getGgz = procedure({
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
