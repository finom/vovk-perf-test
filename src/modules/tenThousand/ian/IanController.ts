import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ians")
export default class IanController {
  @operation({
    summary: "Get Ians",
  })
  @get()
  static getIans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ian",
  })
  @post("{id}")
  static createIan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
