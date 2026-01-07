import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkj")
export default class JkjController {
  @operation({
    summary: "Get Jkj",
  })
  @get()
  static getJkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkj",
  })
  @post("{id}")
  static createJkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
