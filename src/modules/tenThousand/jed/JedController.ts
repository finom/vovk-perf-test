import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jed")
export default class JedController {
  @operation({
    summary: "Get Jed",
  })
  @get()
  static getJed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jed",
  })
  @post("{id}")
  static createJed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
