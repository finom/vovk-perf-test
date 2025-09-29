import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgds")
export default class DgdController {
  @operation({
    summary: "Get Dgds",
  })
  @get()
  static getDgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgd",
  })
  @post("{id}")
  static createDgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
