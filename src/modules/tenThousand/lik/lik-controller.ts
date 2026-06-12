import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lik")
export default class LikController {
  @operation({
    summary: "Get Lik",
  })
  @get()
  static getLik = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lik",
  })
  @post("{id}")
  static createLik = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
