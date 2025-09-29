import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyts")
export default class EytController {
  @operation({
    summary: "Get Eyts",
  })
  @get()
  static getEyts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyt",
  })
  @post("{id}")
  static createEyt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
