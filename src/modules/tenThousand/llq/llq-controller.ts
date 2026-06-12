import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llq")
export default class LlqController {
  @operation({
    summary: "Get Llq",
  })
  @get()
  static getLlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llq",
  })
  @post("{id}")
  static createLlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
