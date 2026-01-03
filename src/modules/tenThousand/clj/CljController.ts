import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cljs")
export default class CljController {
  @operation({
    summary: "Get Cljs",
  })
  @get()
  static getCljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clj",
  })
  @post("{id}")
  static createClj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
