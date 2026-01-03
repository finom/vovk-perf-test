import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsms")
export default class JsmController {
  @operation({
    summary: "Get Jsms",
  })
  @get()
  static getJsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsm",
  })
  @post("{id}")
  static createJsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
