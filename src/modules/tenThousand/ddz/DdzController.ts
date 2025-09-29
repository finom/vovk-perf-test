import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddzs")
export default class DdzController {
  @operation({
    summary: "Get Ddzs",
  })
  @get()
  static getDdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddz",
  })
  @post("{id}")
  static createDdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
