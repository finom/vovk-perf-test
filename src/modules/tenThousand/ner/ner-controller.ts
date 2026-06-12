import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ner")
export default class NerController {
  @operation({
    summary: "Get Ner",
  })
  @get()
  static getNer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ner",
  })
  @post("{id}")
  static createNer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
