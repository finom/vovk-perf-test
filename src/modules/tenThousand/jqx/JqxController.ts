import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqxes")
export default class JqxController {
  @operation({
    summary: "Get Jqxes",
  })
  @get()
  static getJqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqx",
  })
  @post("{id}")
  static createJqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
