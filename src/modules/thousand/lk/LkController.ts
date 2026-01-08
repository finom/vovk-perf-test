import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lk")
export default class LkController {
  @operation({
    summary: "Get Lk",
  })
  @get()
  static getLk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lk",
  })
  @post("{id}")
  static createLk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
