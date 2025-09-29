import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqes")
export default class HqeController {
  @operation({
    summary: "Get Hqes",
  })
  @get()
  static getHqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqe",
  })
  @post("{id}")
  static createHqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
