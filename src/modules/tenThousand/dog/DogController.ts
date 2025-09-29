import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dogs")
export default class DogController {
  @operation({
    summary: "Get Dogs",
  })
  @get()
  static getDogs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dog",
  })
  @post("{id}")
  static createDog = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
