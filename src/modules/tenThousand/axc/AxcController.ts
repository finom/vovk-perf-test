import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("axcs")
export default class AxcController {
  @operation({
    summary: "Get Axcs",
  })
  @get()
  static getAxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Axc",
  })
  @post("{id}")
  static createAxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
