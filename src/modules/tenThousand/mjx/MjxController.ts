import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjx")
export default class MjxController {
  @operation({
    summary: "Get Mjx",
  })
  @get()
  static getMjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjx",
  })
  @post("{id}")
  static createMjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
