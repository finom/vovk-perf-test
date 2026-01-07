import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkq")
export default class JkqController {
  @operation({
    summary: "Get Jkq",
  })
  @get()
  static getJkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkq",
  })
  @post("{id}")
  static createJkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
