import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmq")
export default class MmqController {
  @operation({
    summary: "Get Mmq",
  })
  @get()
  static getMmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmq",
  })
  @post("{id}")
  static createMmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
