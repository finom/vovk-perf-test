import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mix")
export default class MixController {
  @operation({
    summary: "Get Mix",
  })
  @get()
  static getMix = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mix",
  })
  @post("{id}")
  static createMix = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
