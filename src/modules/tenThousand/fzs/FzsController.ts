import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzs")
export default class FzsController {
  @operation({
    summary: "Get Fzs",
  })
  @get()
  static getFzs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzs",
  })
  @post("{id}")
  static createFzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
