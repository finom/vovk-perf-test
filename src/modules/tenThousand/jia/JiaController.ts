import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jias")
export default class JiaController {
  @operation({
    summary: "Get Jias",
  })
  @get()
  static getJias = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jia",
  })
  @post("{id}")
  static createJia = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
