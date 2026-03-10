import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzj")
export default class FzjController {
  @operation({
    summary: "Get Fzj",
  })
  @get()
  static getFzj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzj",
  })
  @post("{id}")
  static createFzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
