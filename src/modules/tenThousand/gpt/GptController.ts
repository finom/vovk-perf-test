import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpt")
export default class GptController {
  @operation({
    summary: "Get Gpt",
  })
  @get()
  static getGpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpt",
  })
  @post("{id}")
  static createGpt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
