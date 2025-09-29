import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("oys")
export default class OyController {
  @operation({
    summary: "Get Oys",
  })
  @get()
  static getOys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oy",
  })
  @post("{id}")
  static createOy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
