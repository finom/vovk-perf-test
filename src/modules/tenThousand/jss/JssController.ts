import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsses")
export default class JssController {
  @operation({
    summary: "Get Jsses",
  })
  @get()
  static getJsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jss",
  })
  @post("{id}")
  static createJss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
