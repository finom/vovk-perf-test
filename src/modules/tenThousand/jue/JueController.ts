import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jue")
export default class JueController {
  @operation({
    summary: "Get Jue",
  })
  @get()
  static getJue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jue",
  })
  @post("{id}")
  static createJue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
