import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kb")
export default class KbController {
  @operation({
    summary: "Get Kb",
  })
  @get()
  static getKb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kb",
  })
  @post("{id}")
  static createKb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
