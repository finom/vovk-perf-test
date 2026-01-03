import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyvs")
export default class JyvController {
  @operation({
    summary: "Get Jyvs",
  })
  @get()
  static getJyvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyv",
  })
  @post("{id}")
  static createJyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
