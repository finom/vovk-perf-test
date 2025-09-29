import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bros")
export default class BroController {
  @operation({
    summary: "Get Bros",
  })
  @get()
  static getBros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bro",
  })
  @post("{id}")
  static createBro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
