import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mys")
export default class MysController {
  @operation({
    summary: "Get Mys",
  })
  @get()
  static getMys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mys",
  })
  @post("{id}")
  static createMys = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
