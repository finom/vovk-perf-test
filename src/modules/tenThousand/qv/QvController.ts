import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("qv")
export default class QvController {
  @operation({
    summary: "Get Qv",
  })
  @get()
  static getQv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Qv",
  })
  @post("{id}")
  static createQv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
