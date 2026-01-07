import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzw")
export default class JzwController {
  @operation({
    summary: "Get Jzw",
  })
  @get()
  static getJzw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzw",
  })
  @post("{id}")
  static createJzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
