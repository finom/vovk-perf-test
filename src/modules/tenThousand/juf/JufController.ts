import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jufs")
export default class JufController {
  @operation({
    summary: "Get Jufs",
  })
  @get()
  static getJufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juf",
  })
  @post("{id}")
  static createJuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
