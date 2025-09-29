import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khcs")
export default class KhcController {
  @operation({
    summary: "Get Khcs",
  })
  @get()
  static getKhcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khc",
  })
  @post("{id}")
  static createKhc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
