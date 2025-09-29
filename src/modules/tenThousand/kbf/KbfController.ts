import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbfs")
export default class KbfController {
  @operation({
    summary: "Get Kbfs",
  })
  @get()
  static getKbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbf",
  })
  @post("{id}")
  static createKbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
