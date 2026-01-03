import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duts")
export default class DutController {
  @operation({
    summary: "Get Duts",
  })
  @get()
  static getDuts = procedure({
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
