import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzw")
export default class FzwController {
  @operation({
    summary: "Get Fzw",
  })
  @get()
  static getFzw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzw",
  })
  @post("{id}")
  static createFzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
