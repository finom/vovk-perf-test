import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqs")
export default class FqsController {
  @operation({
    summary: "Get Fqs",
  })
  @get()
  static getFqs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqs",
  })
  @post("{id}")
  static createFqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
