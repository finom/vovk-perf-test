import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clk")
export default class ClkController {
  @operation({
    summary: "Get Clk",
  })
  @get()
  static getClk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clk",
  })
  @post("{id}")
  static createClk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
