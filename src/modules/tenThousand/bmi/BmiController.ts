import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmis")
export default class BmiController {
  @operation({
    summary: "Get Bmis",
  })
  @get()
  static getBmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmi",
  })
  @post("{id}")
  static createBmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
