import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejds")
export default class EjdController {
  @operation({
    summary: "Get Ejds",
  })
  @get()
  static getEjds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejd",
  })
  @post("{id}")
  static createEjd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
