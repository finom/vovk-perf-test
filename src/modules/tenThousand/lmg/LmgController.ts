import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmg")
export default class LmgController {
  @operation({
    summary: "Get Lmg",
  })
  @get()
  static getLmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmg",
  })
  @post("{id}")
  static createLmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
