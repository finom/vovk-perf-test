import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzh")
export default class FzhController {
  @operation({
    summary: "Get Fzh",
  })
  @get()
  static getFzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzh",
  })
  @post("{id}")
  static createFzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
