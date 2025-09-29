import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfds")
export default class CfdController {
  @operation({
    summary: "Get Cfds",
  })
  @get()
  static getCfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfd",
  })
  @post("{id}")
  static createCfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
