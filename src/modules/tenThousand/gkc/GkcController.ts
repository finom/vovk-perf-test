import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkc")
export default class GkcController {
  @operation({
    summary: "Get Gkc",
  })
  @get()
  static getGkc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkc",
  })
  @post("{id}")
  static createGkc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
