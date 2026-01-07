import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwd")
export default class JwdController {
  @operation({
    summary: "Get Jwd",
  })
  @get()
  static getJwd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwd",
  })
  @post("{id}")
  static createJwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
