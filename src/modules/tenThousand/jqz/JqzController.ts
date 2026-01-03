import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqzs")
export default class JqzController {
  @operation({
    summary: "Get Jqzs",
  })
  @get()
  static getJqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqz",
  })
  @post("{id}")
  static createJqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
