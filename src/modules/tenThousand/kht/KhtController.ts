import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khts")
export default class KhtController {
  @operation({
    summary: "Get Khts",
  })
  @get()
  static getKhts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kht",
  })
  @post("{id}")
  static createKht = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
