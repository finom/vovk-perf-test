import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvi")
export default class HviController {
  @operation({
    summary: "Get Hvi",
  })
  @get()
  static getHvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvi",
  })
  @post("{id}")
  static createHvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
