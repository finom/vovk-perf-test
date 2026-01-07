import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ye")
export default class YeController {
  @operation({
    summary: "Get Ye",
  })
  @get()
  static getYe = procedure({
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
