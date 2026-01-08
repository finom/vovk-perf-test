import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrg")
export default class JrgController {
  @operation({
    summary: "Get Jrg",
  })
  @get()
  static getJrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrg",
  })
  @post("{id}")
  static createJrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
