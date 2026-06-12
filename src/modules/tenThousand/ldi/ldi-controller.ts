import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldi")
export default class LdiController {
  @operation({
    summary: "Get Ldi",
  })
  @get()
  static getLdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldi",
  })
  @post("{id}")
  static createLdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
