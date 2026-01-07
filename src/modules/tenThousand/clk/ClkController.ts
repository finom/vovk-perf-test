import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clk")
export default class ClkController {
  @operation({
    summary: "Get Clk",
  })
  @get()
  static getClk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clk",
  })
  @post("{id}")
  static createClk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
