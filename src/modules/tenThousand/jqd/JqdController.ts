import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqd")
export default class JqdController {
  @operation({
    summary: "Get Jqd",
  })
  @get()
  static getJqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqd",
  })
  @post("{id}")
  static createJqd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
