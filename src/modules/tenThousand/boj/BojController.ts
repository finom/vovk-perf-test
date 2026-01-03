import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bojs")
export default class BojController {
  @operation({
    summary: "Get Bojs",
  })
  @get()
  static getBojs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boj",
  })
  @post("{id}")
  static createBoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
