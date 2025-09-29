import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bais")
export default class BaiController {
  @operation({
    summary: "Get Bais",
  })
  @get()
  static getBais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bai",
  })
  @post("{id}")
  static createBai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
