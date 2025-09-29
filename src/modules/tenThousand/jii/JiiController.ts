import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jiis")
export default class JiiController {
  @operation({
    summary: "Get Jiis",
  })
  @get()
  static getJiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jii",
  })
  @post("{id}")
  static createJii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
