import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knhs")
export default class KnhController {
  @operation({
    summary: "Get Knhs",
  })
  @get()
  static getKnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knh",
  })
  @post("{id}")
  static createKnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
