import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elbs")
export default class ElbController {
  @operation({
    summary: "Get Elbs",
  })
  @get()
  static getElbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elb",
  })
  @post("{id}")
  static createElb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
