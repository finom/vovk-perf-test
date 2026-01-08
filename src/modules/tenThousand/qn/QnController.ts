import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qn")
export default class QnController {
  @operation({
    summary: "Get Qn",
  })
  @get()
  static getQn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qn",
  })
  @post("{id}")
  static createQn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
