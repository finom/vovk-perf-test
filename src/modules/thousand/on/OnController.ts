import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("on")
export default class OnController {
  @operation({
    summary: "Get On",
  })
  @get()
  static getOn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create On",
  })
  @post("{id}")
  static createOn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
