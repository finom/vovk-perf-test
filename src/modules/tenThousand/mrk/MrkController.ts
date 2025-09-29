import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrks")
export default class MrkController {
  @operation({
    summary: "Get Mrks",
  })
  @get()
  static getMrks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrk",
  })
  @post("{id}")
  static createMrk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
