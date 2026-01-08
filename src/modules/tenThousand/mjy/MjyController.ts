import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjy")
export default class MjyController {
  @operation({
    summary: "Get Mjy",
  })
  @get()
  static getMjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjy",
  })
  @post("{id}")
  static createMjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
