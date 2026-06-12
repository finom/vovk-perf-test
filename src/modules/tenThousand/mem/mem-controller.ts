import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mem")
export default class MemController {
  @operation({
    summary: "Get Mem",
  })
  @get()
  static getMem = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mem",
  })
  @post("{id}")
  static createMem = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
