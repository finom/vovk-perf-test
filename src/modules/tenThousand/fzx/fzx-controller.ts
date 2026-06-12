import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzx")
export default class FzxController {
  @operation({
    summary: "Get Fzx",
  })
  @get()
  static getFzx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzx",
  })
  @post("{id}")
  static createFzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
