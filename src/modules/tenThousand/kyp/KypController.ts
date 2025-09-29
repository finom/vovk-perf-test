import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyps")
export default class KypController {
  @operation({
    summary: "Get Kyps",
  })
  @get()
  static getKyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyp",
  })
  @post("{id}")
  static createKyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
