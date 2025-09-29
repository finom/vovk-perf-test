import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlqs")
export default class JlqController {
  @operation({
    summary: "Get Jlqs",
  })
  @get()
  static getJlqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlq",
  })
  @post("{id}")
  static createJlq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
