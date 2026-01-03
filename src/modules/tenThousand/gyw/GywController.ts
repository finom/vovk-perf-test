import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyws")
export default class GywController {
  @operation({
    summary: "Get Gyws",
  })
  @get()
  static getGyws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyw",
  })
  @post("{id}")
  static createGyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
