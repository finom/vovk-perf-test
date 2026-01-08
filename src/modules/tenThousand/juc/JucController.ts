import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juc")
export default class JucController {
  @operation({
    summary: "Get Juc",
  })
  @get()
  static getJuc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juc",
  })
  @post("{id}")
  static createJuc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
