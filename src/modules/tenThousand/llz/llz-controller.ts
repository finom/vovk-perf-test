import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llz")
export default class LlzController {
  @operation({
    summary: "Get Llz",
  })
  @get()
  static getLlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llz",
  })
  @post("{id}")
  static createLlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
