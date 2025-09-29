import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kacs")
export default class KacController {
  @operation({
    summary: "Get Kacs",
  })
  @get()
  static getKacs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kac",
  })
  @post("{id}")
  static createKac = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
