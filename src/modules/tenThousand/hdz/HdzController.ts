import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdzs")
export default class HdzController {
  @operation({
    summary: "Get Hdzs",
  })
  @get()
  static getHdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdz",
  })
  @post("{id}")
  static createHdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
