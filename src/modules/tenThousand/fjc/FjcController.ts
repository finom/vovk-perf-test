import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjcs")
export default class FjcController {
  @operation({
    summary: "Get Fjcs",
  })
  @get()
  static getFjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjc",
  })
  @post("{id}")
  static createFjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
