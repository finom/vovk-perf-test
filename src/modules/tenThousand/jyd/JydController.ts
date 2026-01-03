import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyds")
export default class JydController {
  @operation({
    summary: "Get Jyds",
  })
  @get()
  static getJyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyd",
  })
  @post("{id}")
  static createJyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
