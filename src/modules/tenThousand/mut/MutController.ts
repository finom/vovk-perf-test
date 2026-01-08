import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mut")
export default class MutController {
  @operation({
    summary: "Get Mut",
  })
  @get()
  static getMut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mut",
  })
  @post("{id}")
  static createMut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
