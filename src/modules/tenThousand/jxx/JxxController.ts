import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxxes")
export default class JxxController {
  @operation({
    summary: "Get Jxxes",
  })
  @get()
  static getJxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxx",
  })
  @post("{id}")
  static createJxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
