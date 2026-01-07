import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goe")
export default class GoeController {
  @operation({
    summary: "Get Goe",
  })
  @get()
  static getGoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goe",
  })
  @post("{id}")
  static createGoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
