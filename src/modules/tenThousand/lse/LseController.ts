import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lse")
export default class LseController {
  @operation({
    summary: "Get Lse",
  })
  @get()
  static getLse = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lse",
  })
  @post("{id}")
  static createLse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
