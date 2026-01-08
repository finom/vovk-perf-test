import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eme")
export default class EmeController {
  @operation({
    summary: "Get Eme",
  })
  @get()
  static getEme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eme",
  })
  @post("{id}")
  static createEme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
