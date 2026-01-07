import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jog")
export default class JogController {
  @operation({
    summary: "Get Jog",
  })
  @get()
  static getJog = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jog",
  })
  @post("{id}")
  static createJog = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
