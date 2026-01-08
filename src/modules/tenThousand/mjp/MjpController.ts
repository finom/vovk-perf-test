import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjp")
export default class MjpController {
  @operation({
    summary: "Get Mjp",
  })
  @get()
  static getMjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjp",
  })
  @post("{id}")
  static createMjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
