import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asus")
export default class AsuController {
  @operation({
    summary: "Get Asus",
  })
  @get()
  static getAsus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asu",
  })
  @post("{id}")
  static createAsu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
