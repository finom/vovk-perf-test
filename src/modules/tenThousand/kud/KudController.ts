import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuds")
export default class KudController {
  @operation({
    summary: "Get Kuds",
  })
  @get()
  static getKuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kud",
  })
  @post("{id}")
  static createKud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
