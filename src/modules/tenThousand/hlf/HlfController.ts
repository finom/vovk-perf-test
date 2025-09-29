import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlves")
export default class HlfController {
  @operation({
    summary: "Get Hlves",
  })
  @get()
  static getHlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hlf",
  })
  @post("{id}")
  static createHlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
