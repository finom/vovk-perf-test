import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byks")
export default class BykController {
  @operation({
    summary: "Get Byks",
  })
  @get()
  static getByks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byk",
  })
  @post("{id}")
  static createByk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
