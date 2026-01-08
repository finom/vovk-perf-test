import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrl")
export default class JrlController {
  @operation({
    summary: "Get Jrl",
  })
  @get()
  static getJrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrl",
  })
  @post("{id}")
  static createJrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
