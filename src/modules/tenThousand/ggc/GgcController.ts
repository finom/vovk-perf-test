import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggc")
export default class GgcController {
  @operation({
    summary: "Get Ggc",
  })
  @get()
  static getGgc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggc",
  })
  @post("{id}")
  static createGgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
