import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jch")
export default class JchController {
  @operation({
    summary: "Get Jch",
  })
  @get()
  static getJch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jch",
  })
  @post("{id}")
  static createJch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
