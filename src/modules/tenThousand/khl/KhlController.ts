import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khls")
export default class KhlController {
  @operation({
    summary: "Get Khls",
  })
  @get()
  static getKhls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khl",
  })
  @post("{id}")
  static createKhl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
