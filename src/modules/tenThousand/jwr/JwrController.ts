import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwr")
export default class JwrController {
  @operation({
    summary: "Get Jwr",
  })
  @get()
  static getJwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwr",
  })
  @post("{id}")
  static createJwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
