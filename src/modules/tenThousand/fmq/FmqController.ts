import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fmq")
export default class FmqController {
  @operation({
    summary: "Get Fmq",
  })
  @get()
  static getFmq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fmq",
  })
  @post("{id}")
  static createFmq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
