import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lee")
export default class LeeController {
  @operation({
    summary: "Get Lee",
  })
  @get()
  static getLee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lee",
  })
  @post("{id}")
  static createLee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
