import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duts")
export default class DutController {
  @operation({
    summary: "Get Duts",
  })
  @get()
  static getDuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dut",
  })
  @post("{id}")
  static createDut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
