import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjh")
export default class MjhController {
  @operation({
    summary: "Get Mjh",
  })
  @get()
  static getMjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjh",
  })
  @post("{id}")
  static createMjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
