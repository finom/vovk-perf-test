import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjks")
export default class JjkController {
  @operation({
    summary: "Get Jjks",
  })
  @get()
  static getJjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjk",
  })
  @post("{id}")
  static createJjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
