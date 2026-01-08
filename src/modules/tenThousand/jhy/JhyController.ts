import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhy")
export default class JhyController {
  @operation({
    summary: "Get Jhy",
  })
  @get()
  static getJhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhy",
  })
  @post("{id}")
  static createJhy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
