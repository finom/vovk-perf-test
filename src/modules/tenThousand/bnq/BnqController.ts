import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnqs")
export default class BnqController {
  @operation({
    summary: "Get Bnqs",
  })
  @get()
  static getBnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnq",
  })
  @post("{id}")
  static createBnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
