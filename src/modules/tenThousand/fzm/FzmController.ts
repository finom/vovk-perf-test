import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fzm")
export default class FzmController {
  @operation({
    summary: "Get Fzm",
  })
  @get()
  static getFzm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fzm",
  })
  @post("{id}")
  static createFzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
