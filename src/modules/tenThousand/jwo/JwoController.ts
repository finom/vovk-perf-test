import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jwo")
export default class JwoController {
  @operation({
    summary: "Get Jwo",
  })
  @get()
  static getJwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jwo",
  })
  @post("{id}")
  static createJwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
