import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxs")
export default class JxsController {
  @operation({
    summary: "Get Jxs",
  })
  @get()
  static getJxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxs",
  })
  @post("{id}")
  static createJxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
