import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyds")
export default class GydController {
  @operation({
    summary: "Get Gyds",
  })
  @get()
  static getGyds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyd",
  })
  @post("{id}")
  static createGyd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
