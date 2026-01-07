import { procedure, prefix, get, post, operation } from "vovk";

@prefix("he")
export default class HeController {
  @operation({
    summary: "Get He",
  })
  @get()
  static getHe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create He",
  })
  @post("{id}")
  static createHe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
