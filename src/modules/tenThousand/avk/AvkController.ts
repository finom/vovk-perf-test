import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avks")
export default class AvkController {
  @operation({
    summary: "Get Avks",
  })
  @get()
  static getAvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avk",
  })
  @post("{id}")
  static createAvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
