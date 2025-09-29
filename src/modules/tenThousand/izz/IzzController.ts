import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izzes")
export default class IzzController {
  @operation({
    summary: "Get Izzes",
  })
  @get()
  static getIzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izz",
  })
  @post("{id}")
  static createIzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
