import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsks")
export default class JskController {
  @operation({
    summary: "Get Jsks",
  })
  @get()
  static getJsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsk",
  })
  @post("{id}")
  static createJsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
