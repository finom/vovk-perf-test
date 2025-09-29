import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyfs")
export default class JyfController {
  @operation({
    summary: "Get Jyfs",
  })
  @get()
  static getJyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyf",
  })
  @post("{id}")
  static createJyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
