import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aiu")
export default class AiuController {
  @operation({
    summary: "Get Aiu",
  })
  @get()
  static getAiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiu",
  })
  @post("{id}")
  static createAiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
