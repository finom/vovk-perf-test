import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbj")
export default class MbjController {
  @operation({
    summary: "Get Mbj",
  })
  @get()
  static getMbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbj",
  })
  @post("{id}")
  static createMbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
