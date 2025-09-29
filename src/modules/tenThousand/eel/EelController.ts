import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eels")
export default class EelController {
  @operation({
    summary: "Get Eels",
  })
  @get()
  static getEels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eel",
  })
  @post("{id}")
  static createEel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
