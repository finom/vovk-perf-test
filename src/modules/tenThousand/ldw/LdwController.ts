import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldw")
export default class LdwController {
  @operation({
    summary: "Get Ldw",
  })
  @get()
  static getLdw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldw",
  })
  @post("{id}")
  static createLdw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
