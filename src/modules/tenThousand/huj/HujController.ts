import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hujs")
export default class HujController {
  @operation({
    summary: "Get Hujs",
  })
  @get()
  static getHujs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huj",
  })
  @post("{id}")
  static createHuj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
