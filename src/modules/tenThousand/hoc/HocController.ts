import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hocs")
export default class HocController {
  @operation({
    summary: "Get Hocs",
  })
  @get()
  static getHocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoc",
  })
  @post("{id}")
  static createHoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
