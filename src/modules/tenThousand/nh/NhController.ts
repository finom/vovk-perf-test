import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhs")
export default class NhController {
  @operation({
    summary: "Get Nhs",
  })
  @get()
  static getNhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nh",
  })
  @post("{id}")
  static createNh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
