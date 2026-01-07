import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjk")
export default class JjkController {
  @operation({
    summary: "Get Jjk",
  })
  @get()
  static getJjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjk",
  })
  @post("{id}")
  static createJjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
