import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jves")
export default class JveController {
  @operation({
    summary: "Get Jves",
  })
  @get()
  static getJves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jve",
  })
  @post("{id}")
  static createJve = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
