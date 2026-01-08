import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("enk")
export default class EnkController {
  @operation({
    summary: "Get Enk",
  })
  @get()
  static getEnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enk",
  })
  @post("{id}")
  static createEnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
