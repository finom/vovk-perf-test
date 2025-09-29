import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kecs")
export default class KecController {
  @operation({
    summary: "Get Kecs",
  })
  @get()
  static getKecs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kec",
  })
  @post("{id}")
  static createKec = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
