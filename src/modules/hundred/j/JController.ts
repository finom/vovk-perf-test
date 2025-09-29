import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("js")
export default class JController {
  @operation({
    summary: "Get JS",
  })
  @get()
  static getJS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create J",
  })
  @post("{id}")
  static createJ = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
