import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nce")
export default class NceController {
  @operation({
    summary: "Get Nce",
  })
  @get()
  static getNce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nce",
  })
  @post("{id}")
  static createNce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
