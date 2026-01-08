import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("to")
export default class ToController {
  @operation({
    summary: "Get To",
  })
  @get()
  static getTo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create To",
  })
  @post("{id}")
  static createTo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
