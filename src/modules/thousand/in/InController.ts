import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ins")
export default class InController {
  @operation({
    summary: "Get Ins",
  })
  @get()
  static getIns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create In",
  })
  @post("{id}")
  static createIn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
