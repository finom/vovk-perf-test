import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzgs")
export default class JzgController {
  @operation({
    summary: "Get Jzgs",
  })
  @get()
  static getJzgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzg",
  })
  @post("{id}")
  static createJzg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
