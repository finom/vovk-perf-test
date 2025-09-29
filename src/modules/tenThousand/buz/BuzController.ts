import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buzs")
export default class BuzController {
  @operation({
    summary: "Get Buzs",
  })
  @get()
  static getBuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buz",
  })
  @post("{id}")
  static createBuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
