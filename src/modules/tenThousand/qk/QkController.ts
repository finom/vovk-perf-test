import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qk")
export default class QkController {
  @operation({
    summary: "Get Qk",
  })
  @get()
  static getQk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qk",
  })
  @post("{id}")
  static createQk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
