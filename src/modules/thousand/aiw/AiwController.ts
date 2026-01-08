import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aiw")
export default class AiwController {
  @operation({
    summary: "Get Aiw",
  })
  @get()
  static getAiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiw",
  })
  @post("{id}")
  static createAiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
