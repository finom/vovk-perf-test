import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpv")
export default class BpvController {
  @operation({
    summary: "Get Bpv",
  })
  @get()
  static getBpv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpv",
  })
  @post("{id}")
  static createBpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
