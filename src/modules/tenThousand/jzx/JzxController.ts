import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzx")
export default class JzxController {
  @operation({
    summary: "Get Jzx",
  })
  @get()
  static getJzx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzx",
  })
  @post("{id}")
  static createJzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
