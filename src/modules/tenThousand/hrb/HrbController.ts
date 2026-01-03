import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrbs")
export default class HrbController {
  @operation({
    summary: "Get Hrbs",
  })
  @get()
  static getHrbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrb",
  })
  @post("{id}")
  static createHrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
