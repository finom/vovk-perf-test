import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzts")
export default class JztController {
  @operation({
    summary: "Get Jzts",
  })
  @get()
  static getJzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzt",
  })
  @post("{id}")
  static createJzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
