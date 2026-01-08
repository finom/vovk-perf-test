import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brk")
export default class BrkController {
  @operation({
    summary: "Get Brk",
  })
  @get()
  static getBrk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brk",
  })
  @post("{id}")
  static createBrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
