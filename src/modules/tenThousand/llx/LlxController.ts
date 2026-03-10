import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llx")
export default class LlxController {
  @operation({
    summary: "Get Llx",
  })
  @get()
  static getLlx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llx",
  })
  @post("{id}")
  static createLlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
