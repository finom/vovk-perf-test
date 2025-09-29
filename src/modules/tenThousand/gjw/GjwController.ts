import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjws")
export default class GjwController {
  @operation({
    summary: "Get Gjws",
  })
  @get()
  static getGjws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gjw",
  })
  @post("{id}")
  static createGjw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
