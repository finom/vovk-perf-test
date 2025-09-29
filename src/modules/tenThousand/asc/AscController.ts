import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ascs")
export default class AscController {
  @operation({
    summary: "Get Ascs",
  })
  @get()
  static getAscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asc",
  })
  @post("{id}")
  static createAsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
