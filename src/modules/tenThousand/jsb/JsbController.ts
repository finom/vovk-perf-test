import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsb")
export default class JsbController {
  @operation({
    summary: "Get Jsb",
  })
  @get()
  static getJsb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsb",
  })
  @post("{id}")
  static createJsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
