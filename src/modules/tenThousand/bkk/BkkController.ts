import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bkk")
export default class BkkController {
  @operation({
    summary: "Get Bkk",
  })
  @get()
  static getBkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bkk",
  })
  @post("{id}")
  static createBkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
