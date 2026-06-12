import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzk")
export default class FzkController {
  @operation({
    summary: "Get Fzk",
  })
  @get()
  static getFzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzk",
  })
  @post("{id}")
  static createFzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
