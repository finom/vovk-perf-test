import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eeu")
export default class EeuController {
  @operation({
    summary: "Get Eeu",
  })
  @get()
  static getEeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eeu",
  })
  @post("{id}")
  static createEeu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
