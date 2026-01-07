import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jk")
export default class JkController {
  @operation({
    summary: "Get Jk",
  })
  @get()
  static getJk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jk",
  })
  @post("{id}")
  static createJk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
