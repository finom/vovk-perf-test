import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llk")
export default class LlkController {
  @operation({
    summary: "Get Llk",
  })
  @get()
  static getLlk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Llk",
  })
  @post("{id}")
  static createLlk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
