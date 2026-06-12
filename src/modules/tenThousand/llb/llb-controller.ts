import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llb")
export default class LlbController {
  @operation({
    summary: "Get Llb",
  })
  @get()
  static getLlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llb",
  })
  @post("{id}")
  static createLlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
