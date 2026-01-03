import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hks")
export default class HkController {
  @operation({
    summary: "Get Hks",
  })
  @get()
  static getHks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hk",
  })
  @post("{id}")
  static createHk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
