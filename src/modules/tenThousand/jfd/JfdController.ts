import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfds")
export default class JfdController {
  @operation({
    summary: "Get Jfds",
  })
  @get()
  static getJfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfd",
  })
  @post("{id}")
  static createJfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
