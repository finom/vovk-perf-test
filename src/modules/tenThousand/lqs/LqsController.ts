import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqs")
export default class LqsController {
  @operation({
    summary: "Get Lqs",
  })
  @get()
  static getLqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lqs",
  })
  @post("{id}")
  static createLqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
