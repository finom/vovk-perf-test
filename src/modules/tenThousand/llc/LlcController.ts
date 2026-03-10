import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llc")
export default class LlcController {
  @operation({
    summary: "Get Llc",
  })
  @get()
  static getLlc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llc",
  })
  @post("{id}")
  static createLlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
