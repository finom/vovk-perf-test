import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jigs")
export default class JigController {
  @operation({
    summary: "Get Jigs",
  })
  @get()
  static getJigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jig",
  })
  @post("{id}")
  static createJig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
