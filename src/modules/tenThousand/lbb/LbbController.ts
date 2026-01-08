import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lbb")
export default class LbbController {
  @operation({
    summary: "Get Lbb",
  })
  @get()
  static getLbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lbb",
  })
  @post("{id}")
  static createLbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
