import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jee")
export default class JeeController {
  @operation({
    summary: "Get Jee",
  })
  @get()
  static getJee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jee",
  })
  @post("{id}")
  static createJee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
