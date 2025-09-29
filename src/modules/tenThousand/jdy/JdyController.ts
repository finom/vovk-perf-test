import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdies")
export default class JdyController {
  @operation({
    summary: "Get Jdies",
  })
  @get()
  static getJdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdy",
  })
  @post("{id}")
  static createJdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
