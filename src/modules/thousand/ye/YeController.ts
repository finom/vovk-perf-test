import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yes")
export default class YeController {
  @operation({
    summary: "Get Yes",
  })
  @get()
  static getYes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ye",
  })
  @post("{id}")
  static createYe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
