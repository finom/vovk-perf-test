import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("myt")
export default class MytController {
  @operation({
    summary: "Get Myt",
  })
  @get()
  static getMyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Myt",
  })
  @post("{id}")
  static createMyt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
