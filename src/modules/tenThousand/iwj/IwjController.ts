import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwjs")
export default class IwjController {
  @operation({
    summary: "Get Iwjs",
  })
  @get()
  static getIwjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwj",
  })
  @post("{id}")
  static createIwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
