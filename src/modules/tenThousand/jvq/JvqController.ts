import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvq")
export default class JvqController {
  @operation({
    summary: "Get Jvq",
  })
  @get()
  static getJvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvq",
  })
  @post("{id}")
  static createJvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
