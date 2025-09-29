import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khs")
export default class KhController {
  @operation({
    summary: "Get Khs",
  })
  @get()
  static getKhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kh",
  })
  @post("{id}")
  static createKh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
