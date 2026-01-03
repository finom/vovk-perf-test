import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjjs")
export default class JjjController {
  @operation({
    summary: "Get Jjjs",
  })
  @get()
  static getJjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjj",
  })
  @post("{id}")
  static createJjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
