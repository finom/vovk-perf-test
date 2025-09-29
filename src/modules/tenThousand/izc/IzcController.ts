import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izcs")
export default class IzcController {
  @operation({
    summary: "Get Izcs",
  })
  @get()
  static getIzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izc",
  })
  @post("{id}")
  static createIzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
