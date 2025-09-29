import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hius")
export default class HiuController {
  @operation({
    summary: "Get Hius",
  })
  @get()
  static getHius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hiu",
  })
  @post("{id}")
  static createHiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
