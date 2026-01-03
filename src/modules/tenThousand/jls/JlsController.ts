import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jls")
export default class JlsController {
  @operation({
    summary: "Get Jls",
  })
  @get()
  static getJls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jls",
  })
  @post("{id}")
  static createJls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
