import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jizs")
export default class JizController {
  @operation({
    summary: "Get Jizs",
  })
  @get()
  static getJizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jiz",
  })
  @post("{id}")
  static createJiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
