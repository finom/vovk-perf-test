import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvds")
export default class JvdController {
  @operation({
    summary: "Get Jvds",
  })
  @get()
  static getJvds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvd",
  })
  @post("{id}")
  static createJvd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
