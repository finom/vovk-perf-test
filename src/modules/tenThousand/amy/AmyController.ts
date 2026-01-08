import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amy")
export default class AmyController {
  @operation({
    summary: "Get Amy",
  })
  @get()
  static getAmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amy",
  })
  @post("{id}")
  static createAmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
