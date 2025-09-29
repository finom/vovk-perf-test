import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khjs")
export default class KhjController {
  @operation({
    summary: "Get Khjs",
  })
  @get()
  static getKhjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khj",
  })
  @post("{id}")
  static createKhj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
