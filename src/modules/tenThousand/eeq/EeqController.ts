import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeqs")
export default class EeqController {
  @operation({
    summary: "Get Eeqs",
  })
  @get()
  static getEeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eeq",
  })
  @post("{id}")
  static createEeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
