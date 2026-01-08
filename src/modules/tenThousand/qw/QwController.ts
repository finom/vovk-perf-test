import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qw")
export default class QwController {
  @operation({
    summary: "Get Qw",
  })
  @get()
  static getQw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qw",
  })
  @post("{id}")
  static createQw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
