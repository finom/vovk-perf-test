import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfr")
export default class JfrController {
  @operation({
    summary: "Get Jfr",
  })
  @get()
  static getJfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfr",
  })
  @post("{id}")
  static createJfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
