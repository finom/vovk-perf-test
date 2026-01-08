import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwo")
export default class FwoController {
  @operation({
    summary: "Get Fwo",
  })
  @get()
  static getFwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwo",
  })
  @post("{id}")
  static createFwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
