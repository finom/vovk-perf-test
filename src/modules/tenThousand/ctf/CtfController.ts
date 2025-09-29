import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctfs")
export default class CtfController {
  @operation({
    summary: "Get Ctfs",
  })
  @get()
  static getCtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctf",
  })
  @post("{id}")
  static createCtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
