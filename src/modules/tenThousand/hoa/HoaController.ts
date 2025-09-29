import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoas")
export default class HoaController {
  @operation({
    summary: "Get Hoas",
  })
  @get()
  static getHoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoa",
  })
  @post("{id}")
  static createHoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
