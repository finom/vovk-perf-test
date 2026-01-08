import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjv")
export default class JjvController {
  @operation({
    summary: "Get Jjv",
  })
  @get()
  static getJjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjv",
  })
  @post("{id}")
  static createJjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
