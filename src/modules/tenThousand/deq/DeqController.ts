import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("deq")
export default class DeqController {
  @operation({
    summary: "Get Deq",
  })
  @get()
  static getDeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deq",
  })
  @post("{id}")
  static createDeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
