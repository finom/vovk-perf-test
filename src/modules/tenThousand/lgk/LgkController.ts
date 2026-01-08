import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lgk")
export default class LgkController {
  @operation({
    summary: "Get Lgk",
  })
  @get()
  static getLgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lgk",
  })
  @post("{id}")
  static createLgk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
