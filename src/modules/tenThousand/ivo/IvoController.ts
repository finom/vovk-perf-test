import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivos")
export default class IvoController {
  @operation({
    summary: "Get Ivos",
  })
  @get()
  static getIvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivo",
  })
  @post("{id}")
  static createIvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
