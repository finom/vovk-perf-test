import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dice")
export default class DieController {
  @operation({
    summary: "Get Dice",
  })
  @get()
  static getDice = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Die",
  })
  @post("{id}")
  static createDie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
