import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsl")
export default class JslController {
  @operation({
    summary: "Get Jsl",
  })
  @get()
  static getJsl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsl",
  })
  @post("{id}")
  static createJsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
