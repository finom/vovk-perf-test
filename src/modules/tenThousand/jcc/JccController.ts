import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jccs")
export default class JccController {
  @operation({
    summary: "Get Jccs",
  })
  @get()
  static getJccs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jcc",
  })
  @post("{id}")
  static createJcc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
