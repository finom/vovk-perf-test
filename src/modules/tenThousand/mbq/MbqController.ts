import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbq")
export default class MbqController {
  @operation({
    summary: "Get Mbq",
  })
  @get()
  static getMbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbq",
  })
  @post("{id}")
  static createMbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
