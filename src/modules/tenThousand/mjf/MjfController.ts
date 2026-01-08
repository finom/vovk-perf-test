import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mjf")
export default class MjfController {
  @operation({
    summary: "Get Mjf",
  })
  @get()
  static getMjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mjf",
  })
  @post("{id}")
  static createMjf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
