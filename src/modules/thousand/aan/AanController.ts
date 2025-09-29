import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aans")
export default class AanController {
  @operation({
    summary: "Get Aans",
  })
  @get()
  static getAans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aan",
  })
  @post("{id}")
  static createAan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
