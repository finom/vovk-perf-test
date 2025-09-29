import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoxen")
export default class HoxController {
  @operation({
    summary: "Get Hoxen",
  })
  @get()
  static getHoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hox",
  })
  @post("{id}")
  static createHox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
