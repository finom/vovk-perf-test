import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aid")
export default class AidController {
  @operation({
    summary: "Get Aid",
  })
  @get()
  static getAid = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aid",
  })
  @post("{id}")
  static createAid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
