import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmos")
export default class JmoController {
  @operation({
    summary: "Get Jmos",
  })
  @get()
  static getJmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmo",
  })
  @post("{id}")
  static createJmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
