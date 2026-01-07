import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbq")
export default class JbqController {
  @operation({
    summary: "Get Jbq",
  })
  @get()
  static getJbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbq",
  })
  @post("{id}")
  static createJbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
