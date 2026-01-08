import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tn")
export default class TnController {
  @operation({
    summary: "Get Tn",
  })
  @get()
  static getTn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tn",
  })
  @post("{id}")
  static createTn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
