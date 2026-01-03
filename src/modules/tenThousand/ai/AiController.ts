import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ais")
export default class AiController {
  @operation({
    summary: "Get Ais",
  })
  @get()
  static getAis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ai",
  })
  @post("{id}")
  static createAi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
