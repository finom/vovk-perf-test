import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlgs")
export default class JlgController {
  @operation({
    summary: "Get Jlgs",
  })
  @get()
  static getJlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlg",
  })
  @post("{id}")
  static createJlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
