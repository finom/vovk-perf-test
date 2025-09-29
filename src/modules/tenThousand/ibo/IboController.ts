import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibos")
export default class IboController {
  @operation({
    summary: "Get Ibos",
  })
  @get()
  static getIbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibo",
  })
  @post("{id}")
  static createIbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
