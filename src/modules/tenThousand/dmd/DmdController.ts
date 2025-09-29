import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmds")
export default class DmdController {
  @operation({
    summary: "Get Dmds",
  })
  @get()
  static getDmds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmd",
  })
  @post("{id}")
  static createDmd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
