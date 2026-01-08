import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jut")
export default class JutController {
  @operation({
    summary: "Get Jut",
  })
  @get()
  static getJut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jut",
  })
  @post("{id}")
  static createJut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
