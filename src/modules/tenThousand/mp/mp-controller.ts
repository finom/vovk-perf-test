import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mp")
export default class MpController {
  @operation({
    summary: "Get Mp",
  })
  @get()
  static getMp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mp",
  })
  @post("{id}")
  static createMp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
