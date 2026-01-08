import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qd")
export default class QdController {
  @operation({
    summary: "Get Qd",
  })
  @get()
  static getQd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qd",
  })
  @post("{id}")
  static createQd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
