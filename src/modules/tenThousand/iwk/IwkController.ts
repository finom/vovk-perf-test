import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwks")
export default class IwkController {
  @operation({
    summary: "Get Iwks",
  })
  @get()
  static getIwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwk",
  })
  @post("{id}")
  static createIwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
