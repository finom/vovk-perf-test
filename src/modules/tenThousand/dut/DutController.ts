import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dut")
export default class DutController {
  @operation({
    summary: "Get Dut",
  })
  @get()
  static getDut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dut",
  })
  @post("{id}")
  static createDut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
