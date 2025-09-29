import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kans")
export default class KanController {
  @operation({
    summary: "Get Kans",
  })
  @get()
  static getKans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kan",
  })
  @post("{id}")
  static createKan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
