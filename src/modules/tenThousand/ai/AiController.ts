import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ai")
export default class AiController {
  @operation({
    summary: "Get Ai",
  })
  @get()
  static getAi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ai",
  })
  @post("{id}")
  static createAi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
