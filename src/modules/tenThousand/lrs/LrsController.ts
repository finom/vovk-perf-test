import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrs")
export default class LrsController {
  @operation({
    summary: "Get Lrs",
  })
  @get()
  static getLrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrs",
  })
  @post("{id}")
  static createLrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
