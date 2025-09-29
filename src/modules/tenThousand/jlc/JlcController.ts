import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlcs")
export default class JlcController {
  @operation({
    summary: "Get Jlcs",
  })
  @get()
  static getJlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlc",
  })
  @post("{id}")
  static createJlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
