import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbks")
export default class JbkController {
  @operation({
    summary: "Get Jbks",
  })
  @get()
  static getJbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbk",
  })
  @post("{id}")
  static createJbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
