import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apcs")
export default class ApcController {
  @operation({
    summary: "Get Apcs",
  })
  @get()
  static getApcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apc",
  })
  @post("{id}")
  static createApc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
