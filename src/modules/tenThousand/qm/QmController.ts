import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qm")
export default class QmController {
  @operation({
    summary: "Get Qm",
  })
  @get()
  static getQm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qm",
  })
  @post("{id}")
  static createQm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
