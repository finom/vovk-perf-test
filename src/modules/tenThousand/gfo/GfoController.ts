import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfo")
export default class GfoController {
  @operation({
    summary: "Get Gfo",
  })
  @get()
  static getGfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfo",
  })
  @post("{id}")
  static createGfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
