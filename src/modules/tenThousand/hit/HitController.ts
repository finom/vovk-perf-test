import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hit")
export default class HitController {
  @operation({
    summary: "Get Hit",
  })
  @get()
  static getHit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hit",
  })
  @post("{id}")
  static createHit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
