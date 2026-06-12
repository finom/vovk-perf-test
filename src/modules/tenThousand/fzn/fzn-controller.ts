import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzn")
export default class FznController {
  @operation({
    summary: "Get Fzn",
  })
  @get()
  static getFzn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzn",
  })
  @post("{id}")
  static createFzn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
