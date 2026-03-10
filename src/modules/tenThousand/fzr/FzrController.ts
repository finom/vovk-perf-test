import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzr")
export default class FzrController {
  @operation({
    summary: "Get Fzr",
  })
  @get()
  static getFzr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzr",
  })
  @post("{id}")
  static createFzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
