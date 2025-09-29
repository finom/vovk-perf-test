import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blus")
export default class BluController {
  @operation({
    summary: "Get Blus",
  })
  @get()
  static getBlus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blu",
  })
  @post("{id}")
  static createBlu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
