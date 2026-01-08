import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkk")
export default class LkkController {
  @operation({
    summary: "Get Lkk",
  })
  @get()
  static getLkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkk",
  })
  @post("{id}")
  static createLkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
