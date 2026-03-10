import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llf")
export default class LlfController {
  @operation({
    summary: "Get Llf",
  })
  @get()
  static getLlf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llf",
  })
  @post("{id}")
  static createLlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
