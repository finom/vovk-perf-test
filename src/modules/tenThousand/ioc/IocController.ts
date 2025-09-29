import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iocs")
export default class IocController {
  @operation({
    summary: "Get Iocs",
  })
  @get()
  static getIocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ioc",
  })
  @post("{id}")
  static createIoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
