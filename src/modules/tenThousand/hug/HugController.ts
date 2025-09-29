import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hugs")
export default class HugController {
  @operation({
    summary: "Get Hugs",
  })
  @get()
  static getHugs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hug",
  })
  @post("{id}")
  static createHug = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
