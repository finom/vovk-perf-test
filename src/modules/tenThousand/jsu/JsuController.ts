import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsus")
export default class JsuController {
  @operation({
    summary: "Get Jsus",
  })
  @get()
  static getJsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsu",
  })
  @post("{id}")
  static createJsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
