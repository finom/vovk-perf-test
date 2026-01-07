import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jha")
export default class JhaController {
  @operation({
    summary: "Get Jha",
  })
  @get()
  static getJha = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jha",
  })
  @post("{id}")
  static createJha = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
