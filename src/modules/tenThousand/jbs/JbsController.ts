import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbs")
export default class JbsController {
  @operation({
    summary: "Get Jbs",
  })
  @get()
  static getJbs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbs",
  })
  @post("{id}")
  static createJbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
