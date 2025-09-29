import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeqs")
export default class JeqController {
  @operation({
    summary: "Get Jeqs",
  })
  @get()
  static getJeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jeq",
  })
  @post("{id}")
  static createJeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
