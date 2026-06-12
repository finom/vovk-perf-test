import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpf")
export default class BpfController {
  @operation({
    summary: "Get Bpf",
  })
  @get()
  static getBpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpf",
  })
  @post("{id}")
  static createBpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
