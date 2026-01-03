import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxjs")
export default class JxjController {
  @operation({
    summary: "Get Jxjs",
  })
  @get()
  static getJxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxj",
  })
  @post("{id}")
  static createJxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
