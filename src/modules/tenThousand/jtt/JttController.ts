import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtts")
export default class JttController {
  @operation({
    summary: "Get Jtts",
  })
  @get()
  static getJtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtt",
  })
  @post("{id}")
  static createJtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
