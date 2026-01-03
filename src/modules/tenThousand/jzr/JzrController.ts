import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzrs")
export default class JzrController {
  @operation({
    summary: "Get Jzrs",
  })
  @get()
  static getJzrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jzr",
  })
  @post("{id}")
  static createJzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
