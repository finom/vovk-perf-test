import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyg")
export default class JygController {
  @operation({
    summary: "Get Jyg",
  })
  @get()
  static getJyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyg",
  })
  @post("{id}")
  static createJyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
