import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hks")
export default class HksController {
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
    summary: "Create Hks",
  })
  @post("{id}")
  static createHks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
