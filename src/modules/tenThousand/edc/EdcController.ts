import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edcs")
export default class EdcController {
  @operation({
    summary: "Get Edcs",
  })
  @get()
  static getEdcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edc",
  })
  @post("{id}")
  static createEdc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
