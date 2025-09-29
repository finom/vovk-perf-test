import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njds")
export default class NjdController {
  @operation({
    summary: "Get Njds",
  })
  @get()
  static getNjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njd",
  })
  @post("{id}")
  static createNjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
