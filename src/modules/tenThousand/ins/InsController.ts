import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ins")
export default class InsController {
  @operation({
    summary: "Get Ins",
  })
  @get()
  static getIns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ins",
  })
  @post("{id}")
  static createIns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
