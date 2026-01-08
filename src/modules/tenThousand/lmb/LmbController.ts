import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmb")
export default class LmbController {
  @operation({
    summary: "Get Lmb",
  })
  @get()
  static getLmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmb",
  })
  @post("{id}")
  static createLmb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
