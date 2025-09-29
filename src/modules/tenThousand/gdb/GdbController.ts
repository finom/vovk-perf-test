import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdbs")
export default class GdbController {
  @operation({
    summary: "Get Gdbs",
  })
  @get()
  static getGdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdb",
  })
  @post("{id}")
  static createGdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
