import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hibs")
export default class HibController {
  @operation({
    summary: "Get Hibs",
  })
  @get()
  static getHibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hib",
  })
  @post("{id}")
  static createHib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
