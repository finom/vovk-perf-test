import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzv")
export default class FzvController {
  @operation({
    summary: "Get Fzv",
  })
  @get()
  static getFzv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzv",
  })
  @post("{id}")
  static createFzv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
