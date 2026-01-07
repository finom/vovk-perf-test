import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cog")
export default class CogController {
  @operation({
    summary: "Get Cog",
  })
  @get()
  static getCog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cog",
  })
  @post("{id}")
  static createCog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
