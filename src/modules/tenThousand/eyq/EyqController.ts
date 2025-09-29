import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyqs")
export default class EyqController {
  @operation({
    summary: "Get Eyqs",
  })
  @get()
  static getEyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyq",
  })
  @post("{id}")
  static createEyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
