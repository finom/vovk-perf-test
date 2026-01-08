import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hjk")
export default class HjkController {
  @operation({
    summary: "Get Hjk",
  })
  @get()
  static getHjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjk",
  })
  @post("{id}")
  static createHjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
