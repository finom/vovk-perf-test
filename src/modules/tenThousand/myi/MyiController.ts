import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myis")
export default class MyiController {
  @operation({
    summary: "Get Myis",
  })
  @get()
  static getMyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myi",
  })
  @post("{id}")
  static createMyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
