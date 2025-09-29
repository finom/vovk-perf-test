import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgqs")
export default class CgqController {
  @operation({
    summary: "Get Cgqs",
  })
  @get()
  static getCgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgq",
  })
  @post("{id}")
  static createCgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
