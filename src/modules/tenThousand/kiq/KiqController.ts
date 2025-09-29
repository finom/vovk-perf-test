import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kiqs")
export default class KiqController {
  @operation({
    summary: "Get Kiqs",
  })
  @get()
  static getKiqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kiq",
  })
  @post("{id}")
  static createKiq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
