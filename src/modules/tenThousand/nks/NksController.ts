import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nks")
export default class NksController {
  @operation({
    summary: "Get Nks",
  })
  @get()
  static getNks = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nks",
  })
  @post("{id}")
  static createNks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
