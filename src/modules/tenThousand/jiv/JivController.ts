import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiv")
export default class JivController {
  @operation({
    summary: "Get Jiv",
  })
  @get()
  static getJiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiv",
  })
  @post("{id}")
  static createJiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
