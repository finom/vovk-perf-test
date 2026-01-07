import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dut")
export default class DutController {
  @operation({
    summary: "Get Dut",
  })
  @get()
  static getDut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dut",
  })
  @post("{id}")
  static createDut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
