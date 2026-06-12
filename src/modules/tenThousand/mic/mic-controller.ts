import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mic")
export default class MicController {
  @operation({
    summary: "Get Mic",
  })
  @get()
  static getMic = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mic",
  })
  @post("{id}")
  static createMic = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
