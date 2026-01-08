import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrm")
export default class JrmController {
  @operation({
    summary: "Get Jrm",
  })
  @get()
  static getJrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrm",
  })
  @post("{id}")
  static createJrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
