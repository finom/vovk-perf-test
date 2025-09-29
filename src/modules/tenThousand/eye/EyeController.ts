import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyes")
export default class EyeController {
  @operation({
    summary: "Get Eyes",
  })
  @get()
  static getEyes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eye",
  })
  @post("{id}")
  static createEye = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
