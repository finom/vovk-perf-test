import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lka")
export default class LkaController {
  @operation({
    summary: "Get Lka",
  })
  @get()
  static getLka = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lka",
  })
  @post("{id}")
  static createLka = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
