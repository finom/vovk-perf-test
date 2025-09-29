import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnhs")
export default class BnhController {
  @operation({
    summary: "Get Bnhs",
  })
  @get()
  static getBnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnh",
  })
  @post("{id}")
  static createBnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
