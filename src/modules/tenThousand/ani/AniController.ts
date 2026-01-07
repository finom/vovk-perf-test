import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ani")
export default class AniController {
  @operation({
    summary: "Get Ani",
  })
  @get()
  static getAni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ani",
  })
  @post("{id}")
  static createAni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
