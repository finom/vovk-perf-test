import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivcs")
export default class IvcController {
  @operation({
    summary: "Get Ivcs",
  })
  @get()
  static getIvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivc",
  })
  @post("{id}")
  static createIvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
