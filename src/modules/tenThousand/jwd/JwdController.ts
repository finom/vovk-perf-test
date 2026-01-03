import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwds")
export default class JwdController {
  @operation({
    summary: "Get Jwds",
  })
  @get()
  static getJwds = procedure({
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
