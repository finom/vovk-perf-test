import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbt")
export default class JbtController {
  @operation({
    summary: "Get Jbt",
  })
  @get()
  static getJbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jbt",
  })
  @post("{id}")
  static createJbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
