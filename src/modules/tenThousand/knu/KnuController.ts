import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knu")
export default class KnuController {
  @operation({
    summary: "Get Knu",
  })
  @get()
  static getKnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knu",
  })
  @post("{id}")
  static createKnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
