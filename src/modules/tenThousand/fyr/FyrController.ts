import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyrs")
export default class FyrController {
  @operation({
    summary: "Get Fyrs",
  })
  @get()
  static getFyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyr",
  })
  @post("{id}")
  static createFyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
