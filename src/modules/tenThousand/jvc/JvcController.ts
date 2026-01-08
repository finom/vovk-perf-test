import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jvc")
export default class JvcController {
  @operation({
    summary: "Get Jvc",
  })
  @get()
  static getJvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvc",
  })
  @post("{id}")
  static createJvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
