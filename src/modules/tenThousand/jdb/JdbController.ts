import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdbs")
export default class JdbController {
  @operation({
    summary: "Get Jdbs",
  })
  @get()
  static getJdbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdb",
  })
  @post("{id}")
  static createJdb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
