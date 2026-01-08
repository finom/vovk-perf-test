import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrb")
export default class JrbController {
  @operation({
    summary: "Get Jrb",
  })
  @get()
  static getJrb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jrb",
  })
  @post("{id}")
  static createJrb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
