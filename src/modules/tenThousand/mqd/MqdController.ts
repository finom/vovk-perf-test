import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mqds")
export default class MqdController {
  @operation({
    summary: "Get Mqds",
  })
  @get()
  static getMqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mqd",
  })
  @post("{id}")
  static createMqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
