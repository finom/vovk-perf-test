import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsl")
export default class JslController {
  @operation({
    summary: "Get Jsl",
  })
  @get()
  static getJsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsl",
  })
  @post("{id}")
  static createJsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
