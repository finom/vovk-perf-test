import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgn")
export default class JgnController {
  @operation({
    summary: "Get Jgn",
  })
  @get()
  static getJgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgn",
  })
  @post("{id}")
  static createJgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
