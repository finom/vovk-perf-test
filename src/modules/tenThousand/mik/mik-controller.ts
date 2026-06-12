import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mik")
export default class MikController {
  @operation({
    summary: "Get Mik",
  })
  @get()
  static getMik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mik",
  })
  @post("{id}")
  static createMik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
