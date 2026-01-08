import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmk")
export default class MmkController {
  @operation({
    summary: "Get Mmk",
  })
  @get()
  static getMmk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mmk",
  })
  @post("{id}")
  static createMmk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
