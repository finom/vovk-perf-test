import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hebs")
export default class HebController {
  @operation({
    summary: "Get Hebs",
  })
  @get()
  static getHebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Heb",
  })
  @post("{id}")
  static createHeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
