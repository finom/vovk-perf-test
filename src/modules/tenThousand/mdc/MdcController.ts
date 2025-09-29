import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdcs")
export default class MdcController {
  @operation({
    summary: "Get Mdcs",
  })
  @get()
  static getMdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdc",
  })
  @post("{id}")
  static createMdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
