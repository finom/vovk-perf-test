import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhfs")
export default class HhfController {
  @operation({
    summary: "Get Hhfs",
  })
  @get()
  static getHhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhf",
  })
  @post("{id}")
  static createHhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
