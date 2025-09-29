import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjos")
export default class HjoController {
  @operation({
    summary: "Get Hjos",
  })
  @get()
  static getHjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjo",
  })
  @post("{id}")
  static createHjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
