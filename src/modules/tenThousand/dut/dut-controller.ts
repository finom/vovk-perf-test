import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dut")
export default class DutController {
  @operation({
    summary: "Get Dut",
  })
  @get()
  static getDut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dut",
  })
  @post("{id}")
  static createDut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
