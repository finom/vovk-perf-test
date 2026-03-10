import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzd")
export default class FzdController {
  @operation({
    summary: "Get Fzd",
  })
  @get()
  static getFzd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzd",
  })
  @post("{id}")
  static createFzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
