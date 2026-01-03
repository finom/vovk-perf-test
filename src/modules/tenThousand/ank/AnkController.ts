import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anks")
export default class AnkController {
  @operation({
    summary: "Get Anks",
  })
  @get()
  static getAnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ank",
  })
  @post("{id}")
  static createAnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
