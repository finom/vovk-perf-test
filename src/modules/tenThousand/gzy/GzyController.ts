import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzies")
export default class GzyController {
  @operation({
    summary: "Get Gzies",
  })
  @get()
  static getGzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzy",
  })
  @post("{id}")
  static createGzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
