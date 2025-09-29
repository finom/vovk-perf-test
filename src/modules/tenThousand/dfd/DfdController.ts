import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfds")
export default class DfdController {
  @operation({
    summary: "Get Dfds",
  })
  @get()
  static getDfds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfd",
  })
  @post("{id}")
  static createDfd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
