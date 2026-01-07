import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzz")
export default class JzzController {
  @operation({
    summary: "Get Jzz",
  })
  @get()
  static getJzz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzz",
  })
  @post("{id}")
  static createJzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
