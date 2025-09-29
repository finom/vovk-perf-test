import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jubs")
export default class JubController {
  @operation({
    summary: "Get Jubs",
  })
  @get()
  static getJubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jub",
  })
  @post("{id}")
  static createJub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
