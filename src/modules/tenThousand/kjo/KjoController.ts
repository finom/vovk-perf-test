import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjos")
export default class KjoController {
  @operation({
    summary: "Get Kjos",
  })
  @get()
  static getKjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjo",
  })
  @post("{id}")
  static createKjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
