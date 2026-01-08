import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("not")
export default class NotController {
  @operation({
    summary: "Get Not",
  })
  @get()
  static getNot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Not",
  })
  @post("{id}")
  static createNot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
