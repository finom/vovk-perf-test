import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jips")
export default class JipController {
  @operation({
    summary: "Get Jips",
  })
  @get()
  static getJips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jip",
  })
  @post("{id}")
  static createJip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
