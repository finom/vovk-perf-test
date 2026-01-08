import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("llv")
export default class LlvController {
  @operation({
    summary: "Get Llv",
  })
  @get()
  static getLlv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Llv",
  })
  @post("{id}")
  static createLlv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
