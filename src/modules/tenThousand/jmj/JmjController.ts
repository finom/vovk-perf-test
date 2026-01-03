import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmjs")
export default class JmjController {
  @operation({
    summary: "Get Jmjs",
  })
  @get()
  static getJmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmj",
  })
  @post("{id}")
  static createJmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
