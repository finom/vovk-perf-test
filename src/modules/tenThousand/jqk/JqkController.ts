import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqk")
export default class JqkController {
  @operation({
    summary: "Get Jqk",
  })
  @get()
  static getJqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqk",
  })
  @post("{id}")
  static createJqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
