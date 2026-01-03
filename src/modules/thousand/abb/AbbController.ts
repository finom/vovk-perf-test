import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abbs")
export default class AbbController {
  @operation({
    summary: "Get Abbs",
  })
  @get()
  static getAbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abb",
  })
  @post("{id}")
  static createAbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
