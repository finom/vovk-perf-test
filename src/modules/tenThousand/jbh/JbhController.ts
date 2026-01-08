import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbh")
export default class JbhController {
  @operation({
    summary: "Get Jbh",
  })
  @get()
  static getJbh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbh",
  })
  @post("{id}")
  static createJbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
