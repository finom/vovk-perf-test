import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcjs")
export default class GcjController {
  @operation({
    summary: "Get Gcjs",
  })
  @get()
  static getGcjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcj",
  })
  @post("{id}")
  static createGcj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
