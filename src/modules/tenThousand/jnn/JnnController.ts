import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnns")
export default class JnnController {
  @operation({
    summary: "Get Jnns",
  })
  @get()
  static getJnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnn",
  })
  @post("{id}")
  static createJnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
