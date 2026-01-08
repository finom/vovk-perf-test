import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfv")
export default class JfvController {
  @operation({
    summary: "Get Jfv",
  })
  @get()
  static getJfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfv",
  })
  @post("{id}")
  static createJfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
