import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qa")
export default class QaController {
  @operation({
    summary: "Get Qa",
  })
  @get()
  static getQa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qa",
  })
  @post("{id}")
  static createQa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
