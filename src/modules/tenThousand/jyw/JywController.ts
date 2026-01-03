import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyws")
export default class JywController {
  @operation({
    summary: "Get Jyws",
  })
  @get()
  static getJyws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyw",
  })
  @post("{id}")
  static createJyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
