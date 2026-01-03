import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkns")
export default class GknController {
  @operation({
    summary: "Get Gkns",
  })
  @get()
  static getGkns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkn",
  })
  @post("{id}")
  static createGkn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
