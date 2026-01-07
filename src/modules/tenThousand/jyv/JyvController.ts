import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyv")
export default class JyvController {
  @operation({
    summary: "Get Jyv",
  })
  @get()
  static getJyv = procedure({
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
