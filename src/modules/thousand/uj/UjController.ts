import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ujs")
export default class UjController {
  @operation({
    summary: "Get Ujs",
  })
  @get()
  static getUjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uj",
  })
  @post("{id}")
  static createUj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
