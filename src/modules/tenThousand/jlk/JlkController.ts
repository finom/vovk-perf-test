import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlks")
export default class JlkController {
  @operation({
    summary: "Get Jlks",
  })
  @get()
  static getJlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlk",
  })
  @post("{id}")
  static createJlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
