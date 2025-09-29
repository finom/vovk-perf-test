import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coks")
export default class CokController {
  @operation({
    summary: "Get Coks",
  })
  @get()
  static getCoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cok",
  })
  @post("{id}")
  static createCok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
