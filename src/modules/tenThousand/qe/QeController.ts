import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qe")
export default class QeController {
  @operation({
    summary: "Get Qe",
  })
  @get()
  static getQe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qe",
  })
  @post("{id}")
  static createQe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
