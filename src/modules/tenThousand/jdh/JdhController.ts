import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdhs")
export default class JdhController {
  @operation({
    summary: "Get Jdhs",
  })
  @get()
  static getJdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdh",
  })
  @post("{id}")
  static createJdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
