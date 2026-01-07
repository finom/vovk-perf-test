import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gg")
export default class GgController {
  @operation({
    summary: "Get Gg",
  })
  @get()
  static getGg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gg",
  })
  @post("{id}")
  static createGg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
