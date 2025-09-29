import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnqs")
export default class CnqController {
  @operation({
    summary: "Get Cnqs",
  })
  @get()
  static getCnqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnq",
  })
  @post("{id}")
  static createCnq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
