import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jkn")
export default class JknController {
  @operation({
    summary: "Get Jkn",
  })
  @get()
  static getJkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jkn",
  })
  @post("{id}")
  static createJkn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
