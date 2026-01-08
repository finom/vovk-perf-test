import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxj")
export default class JxjController {
  @operation({
    summary: "Get Jxj",
  })
  @get()
  static getJxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxj",
  })
  @post("{id}")
  static createJxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
