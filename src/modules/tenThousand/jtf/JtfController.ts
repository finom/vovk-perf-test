import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtfs")
export default class JtfController {
  @operation({
    summary: "Get Jtfs",
  })
  @get()
  static getJtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtf",
  })
  @post("{id}")
  static createJtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
