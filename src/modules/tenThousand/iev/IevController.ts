import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ievs")
export default class IevController {
  @operation({
    summary: "Get Ievs",
  })
  @get()
  static getIevs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iev",
  })
  @post("{id}")
  static createIev = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
