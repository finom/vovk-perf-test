import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmies")
export default class KmyController {
  @operation({
    summary: "Get Kmies",
  })
  @get()
  static getKmies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmy",
  })
  @post("{id}")
  static createKmy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
