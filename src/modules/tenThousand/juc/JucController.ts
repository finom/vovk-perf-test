import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jucs")
export default class JucController {
  @operation({
    summary: "Get Jucs",
  })
  @get()
  static getJucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juc",
  })
  @post("{id}")
  static createJuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
