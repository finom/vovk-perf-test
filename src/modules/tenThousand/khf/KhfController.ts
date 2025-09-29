import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khfs")
export default class KhfController {
  @operation({
    summary: "Get Khfs",
  })
  @get()
  static getKhfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khf",
  })
  @post("{id}")
  static createKhf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
