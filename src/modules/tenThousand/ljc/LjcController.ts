import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljcs")
export default class LjcController {
  @operation({
    summary: "Get Ljcs",
  })
  @get()
  static getLjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljc",
  })
  @post("{id}")
  static createLjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
