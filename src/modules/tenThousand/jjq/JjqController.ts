import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jjq")
export default class JjqController {
  @operation({
    summary: "Get Jjq",
  })
  @get()
  static getJjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjq",
  })
  @post("{id}")
  static createJjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
