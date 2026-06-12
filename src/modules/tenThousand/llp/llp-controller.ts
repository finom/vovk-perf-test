import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llp")
export default class LlpController {
  @operation({
    summary: "Get Llp",
  })
  @get()
  static getLlp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llp",
  })
  @post("{id}")
  static createLlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
