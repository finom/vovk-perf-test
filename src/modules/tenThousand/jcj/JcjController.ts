import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jcj")
export default class JcjController {
  @operation({
    summary: "Get Jcj",
  })
  @get()
  static getJcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jcj",
  })
  @post("{id}")
  static createJcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
