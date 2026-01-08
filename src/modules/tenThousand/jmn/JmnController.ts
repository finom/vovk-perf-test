import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jmn")
export default class JmnController {
  @operation({
    summary: "Get Jmn",
  })
  @get()
  static getJmn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jmn",
  })
  @post("{id}")
  static createJmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
