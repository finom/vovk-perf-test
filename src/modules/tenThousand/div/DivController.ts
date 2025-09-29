import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("divs")
export default class DivController {
  @operation({
    summary: "Get Divs",
  })
  @get()
  static getDivs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Div",
  })
  @post("{id}")
  static createDiv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
