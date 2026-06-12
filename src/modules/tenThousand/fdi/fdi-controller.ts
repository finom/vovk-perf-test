import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdi")
export default class FdiController {
  @operation({
    summary: "Get Fdi",
  })
  @get()
  static getFdi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdi",
  })
  @post("{id}")
  static createFdi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
