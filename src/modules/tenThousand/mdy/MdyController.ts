import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdies")
export default class MdyController {
  @operation({
    summary: "Get Mdies",
  })
  @get()
  static getMdies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdy",
  })
  @post("{id}")
  static createMdy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
