import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iufs")
export default class IufController {
  @operation({
    summary: "Get Iufs",
  })
  @get()
  static getIufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuf",
  })
  @post("{id}")
  static createIuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
