import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jfw")
export default class JfwController {
  @operation({
    summary: "Get Jfw",
  })
  @get()
  static getJfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfw",
  })
  @post("{id}")
  static createJfw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
