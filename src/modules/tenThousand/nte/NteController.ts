import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nte")
export default class NteController {
  @operation({
    summary: "Get Nte",
  })
  @get()
  static getNte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nte",
  })
  @post("{id}")
  static createNte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
