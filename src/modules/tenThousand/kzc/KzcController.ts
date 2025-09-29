import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzcs")
export default class KzcController {
  @operation({
    summary: "Get Kzcs",
  })
  @get()
  static getKzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzc",
  })
  @post("{id}")
  static createKzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
