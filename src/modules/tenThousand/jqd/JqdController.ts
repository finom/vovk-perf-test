import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqd")
export default class JqdController {
  @operation({
    summary: "Get Jqd",
  })
  @get()
  static getJqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqd",
  })
  @post("{id}")
  static createJqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
