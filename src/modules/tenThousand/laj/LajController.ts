import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("laj")
export default class LajController {
  @operation({
    summary: "Get Laj",
  })
  @get()
  static getLaj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Laj",
  })
  @post("{id}")
  static createLaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
