import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jams")
export default class JamController {
  @operation({
    summary: "Get Jams",
  })
  @get()
  static getJams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jam",
  })
  @post("{id}")
  static createJam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
