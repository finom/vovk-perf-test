import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lie")
export default class LieController {
  @operation({
    summary: "Get Lie",
  })
  @get()
  static getLie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lie",
  })
  @post("{id}")
  static createLie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
