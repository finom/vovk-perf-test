import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjq")
export default class MjqController {
  @operation({
    summary: "Get Mjq",
  })
  @get()
  static getMjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjq",
  })
  @post("{id}")
  static createMjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
