import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hufs")
export default class HufController {
  @operation({
    summary: "Get Hufs",
  })
  @get()
  static getHufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huf",
  })
  @post("{id}")
  static createHuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
