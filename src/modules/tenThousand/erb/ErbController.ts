import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erbs")
export default class ErbController {
  @operation({
    summary: "Get Erbs",
  })
  @get()
  static getErbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erb",
  })
  @post("{id}")
  static createErb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
