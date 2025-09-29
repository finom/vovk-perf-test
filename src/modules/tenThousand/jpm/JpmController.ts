import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpms")
export default class JpmController {
  @operation({
    summary: "Get Jpms",
  })
  @get()
  static getJpms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpm",
  })
  @post("{id}")
  static createJpm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
