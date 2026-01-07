import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbj")
export default class JbjController {
  @operation({
    summary: "Get Jbj",
  })
  @get()
  static getJbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbj",
  })
  @post("{id}")
  static createJbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
