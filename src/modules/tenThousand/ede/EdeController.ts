import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edes")
export default class EdeController {
  @operation({
    summary: "Get Edes",
  })
  @get()
  static getEdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ede",
  })
  @post("{id}")
  static createEde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
