import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mkks")
export default class MkkController {
  @operation({
    summary: "Get Mkks",
  })
  @get()
  static getMkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mkk",
  })
  @post("{id}")
  static createMkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
