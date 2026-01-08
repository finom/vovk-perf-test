import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enq")
export default class EnqController {
  @operation({
    summary: "Get Enq",
  })
  @get()
  static getEnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enq",
  })
  @post("{id}")
  static createEnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
