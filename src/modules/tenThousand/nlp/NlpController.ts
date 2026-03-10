import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlp")
export default class NlpController {
  @operation({
    summary: "Get Nlp",
  })
  @get()
  static getNlp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlp",
  })
  @post("{id}")
  static createNlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
