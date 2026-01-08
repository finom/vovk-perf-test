import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jce")
export default class JceController {
  @operation({
    summary: "Get Jce",
  })
  @get()
  static getJce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jce",
  })
  @post("{id}")
  static createJce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
