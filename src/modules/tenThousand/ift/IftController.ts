import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifts")
export default class IftController {
  @operation({
    summary: "Get Ifts",
  })
  @get()
  static getIfts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ift",
  })
  @post("{id}")
  static createIft = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
