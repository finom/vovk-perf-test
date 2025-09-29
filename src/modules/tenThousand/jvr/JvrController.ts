import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvrs")
export default class JvrController {
  @operation({
    summary: "Get Jvrs",
  })
  @get()
  static getJvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvr",
  })
  @post("{id}")
  static createJvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
