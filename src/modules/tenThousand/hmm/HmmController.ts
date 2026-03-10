import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmm")
export default class HmmController {
  @operation({
    summary: "Get Hmm",
  })
  @get()
  static getHmm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmm",
  })
  @post("{id}")
  static createHmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
