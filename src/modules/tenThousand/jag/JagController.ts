import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jags")
export default class JagController {
  @operation({
    summary: "Get Jags",
  })
  @get()
  static getJags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jag",
  })
  @post("{id}")
  static createJag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
