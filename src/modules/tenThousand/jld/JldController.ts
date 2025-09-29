import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlds")
export default class JldController {
  @operation({
    summary: "Get Jlds",
  })
  @get()
  static getJlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jld",
  })
  @post("{id}")
  static createJld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
