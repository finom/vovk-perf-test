import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpk")
export default class BpkController {
  @operation({
    summary: "Get Bpk",
  })
  @get()
  static getBpk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpk",
  })
  @post("{id}")
  static createBpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
