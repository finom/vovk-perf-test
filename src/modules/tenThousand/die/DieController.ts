import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("die")
export default class DieController {
  @operation({
    summary: "Get Die",
  })
  @get()
  static getDie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Die",
  })
  @post("{id}")
  static createDie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
