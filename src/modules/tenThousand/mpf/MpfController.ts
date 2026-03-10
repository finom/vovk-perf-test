import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpf")
export default class MpfController {
  @operation({
    summary: "Get Mpf",
  })
  @get()
  static getMpf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpf",
  })
  @post("{id}")
  static createMpf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
