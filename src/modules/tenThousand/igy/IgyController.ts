import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igies")
export default class IgyController {
  @operation({
    summary: "Get Igies",
  })
  @get()
  static getIgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igy",
  })
  @post("{id}")
  static createIgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
