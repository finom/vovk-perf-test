import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kops")
export default class KopController {
  @operation({
    summary: "Get Kops",
  })
  @get()
  static getKops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kop",
  })
  @post("{id}")
  static createKop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
