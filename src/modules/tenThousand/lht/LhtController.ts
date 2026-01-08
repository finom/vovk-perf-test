import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lht")
export default class LhtController {
  @operation({
    summary: "Get Lht",
  })
  @get()
  static getLht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lht",
  })
  @post("{id}")
  static createLht = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
