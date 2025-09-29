import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlps")
export default class JlpController {
  @operation({
    summary: "Get Jlps",
  })
  @get()
  static getJlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlp",
  })
  @post("{id}")
  static createJlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
