import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wies")
export default class WyController {
  @operation({
    summary: "Get Wies",
  })
  @get()
  static getWies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wy",
  })
  @post("{id}")
  static createWy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
